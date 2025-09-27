from typing import List
from pyhocon import ConfigFactory
import os


class HasCycleError(Exception):
    """An error occurs when transformation has a cycle"""


class DependsOnError(Exception):
    """The value specified in 'dependsOn' does not exist in the transormation flow."""


class ConfParser:
    def __init__(self, file: str) -> None:
        self.file = file
        self.data = None
        self.tranformations = None
        self.dependencies = {}

    def run(self) -> "ConfParser":
        if os.path.isfile(self.file):
            self.data = ConfigFactory.parse_file(
                self.file
            )  # self.file is an actual file.
        else:
            self.data = ConfigFactory.parse_string(self.file)  # self.file is a content.

        self.tranformations = self.data["transformations"]

        for name, details in self.tranformations.items():
            self.dependencies[name] = details.get("dependsOn", [])

        return self

    def enqueue(self) -> List:
        result = []
        visited = set()
        marked = set()

        def dfs(node: str) -> None:
            if node in marked:
                raise HasCycleError(f"Tranformation has a cycle: {node}")

            if node not in visited:
                marked.add(node)

                for dependent in self.dependencies.get(node, []):
                    dfs(dependent)

                marked.remove(node)
                visited.add(node)
                result.append(node)

        for node in self.dependencies:
            if node not in visited:
                dfs(node)

        return result

    def check_dependsOn_validity(self, queue: List) -> None:
        dataflows = list(self.tranformations.keys())

        for q in queue:
            if q not in dataflows:
                raise DependsOnError(f"'{q}' in dependsOn does not exist as a dataflow")

        print("dependsOn is valid")
