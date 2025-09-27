a = [100, 4, 90, 5, 35, 13, 43, 125]

max1 = float('-inf')
max2 = float('-inf')
# max1 < max2

for i in a:
    if i > max1:
        if i > max2:
            max1 = max2
            max2 = i
        else:
            max1 = i


print(max1)
print(max2)