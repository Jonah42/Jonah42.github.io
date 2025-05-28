import random

numWords = 139
numPeople = 5

nums = [i%numPeople for i in range(numWords)]
random.shuffle(nums)
print(nums)

