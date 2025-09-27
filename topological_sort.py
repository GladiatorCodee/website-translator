class HasCycleError(Exception):
    """Occurs if there is cycle error"""

def topological_sort(packages):
    result = []
    visited = set()
    marked = set()

    def dfs(package):
        if package in marked:
            raise HasCycleError(f"Cycle error: {package}")

        if package not in visited:
            marked.add(package)

            for p in packages.get(package, []):
                dfs(p)
            visited.add(package)
            result.append(package)
            marked.remove(package)
    
    for package in packages:
        if package not in visited:
            dfs(package)
    
    return result

package_info = {
    "a": ["b", "c"],
    "b": ["d"],
    "e": ["d"],
    "f": [],
    "c": ["f", "g"],
    "d": []
}

print(topological_sort(package_info))