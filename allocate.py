import random

numWords = 1594-1241+1
numPeople = 10

nums = [i%numPeople for i in range(numWords)]
random.shuffle(nums)
print(nums)

