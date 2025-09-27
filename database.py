from abc import ABC, abstractmethod
from psycopg2.extensions import parse_dsn
import psycopg2
import psycopg2.extras


class DatabaseConnectionError(Exception):
    """An error occurred while connecting to a database"""


class DatabaseQueryExecutionError(Exception):
    """An error occurred while executing a query"""


class Database(ABC):
    def __init__(self, dsn: str) -> None:
        self.dsn = dsn
        self.parsed_dsn = parse_dsn(dsn)
        self.conn = None

    @abstractmethod
    def connect(self):
        raise NotImplementedError()

    @abstractmethod
    def run_query(self, query: str):
        raise NotImplementedError()

    @abstractmethod
    def all_tables(self):
        raise NotImplementedError()

    @abstractmethod
    def close(self) -> None:
        raise NotImplementedError()


class PostgreSQL(Database):
    def connect(self) -> bool:
        try:
            self.conn = psycopg2.connect(self.dsn)
        except Exception as e:
            raise DatabaseConnectionError(
                f"Database connection error on {self.dsn}"
            ) from e

        return self.conn is not None

    def run_query(self, query: str):
        result = None
        self.conn.autocommit = True
        try:
            with self.conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as curs:
                curs.execute(query)
                result = curs.fetchall()

        except Exception as exc:
            raise DatabaseQueryExecutionError(
                f"Query execution error on {self.dsn} \n{str(exc)}"
            )

        return result

    def all_tables(self):
        sql = """
                SELECT schemaname||'.'||tablename as table_name,
                 obj_description((schemaname||'.'||tablename)::regclass) as description FROM pg_catalog.pg_tables
                    WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';
        """
        return self.run_query(sql)

    def close(self) -> None:
        self.conn.close()