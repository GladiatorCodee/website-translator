from pyspark.sql import SparkSession

# Create a Spark session
spark = SparkSession.builder \
    .appName("My Spark Job") \
    .getOrCreate()

# Example DataFrame operation
data = [("Alice", 1), ("Bob", 2), ("Cathy", 3)]
df = spark.createDataFrame(data, ["Name", "Id"])

df.show()

# Stop the Spark session
spark.stop()
