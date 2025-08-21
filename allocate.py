import random

numWords = 1241-787+1
numPeople = 9

nums = [i%numPeople for i in range(numWords)]
random.shuffle(nums)
print(nums)

