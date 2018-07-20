import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Arc


# Ellipse parameters
R = 1
x, y = 0, 0
a, b = 2 * R, R

# Figure setup
fig, ax = plt.subplots(figsize=(20, 20))
dire = -1


def addSemi(old, new):
    global ax
    global dire
    r = abs(old-new)
    if(dire > 0):
        ax.add_patch(Arc((old + (new-old)/2, 0), r, r,
                         theta1=0, theta2=180, edgecolor='k'))
        dire *= -1
    else:
        ax.add_patch(Arc((old + (new-old)/2, 0), r, r,
                         theta1=180, theta2=360, edgecolor='k'))
        dire *= -1


term = 0
nums = [term]
iters = 1000


for i in range(iters):
    coso = i+1
    # negative, have to move forward
    if(term-coso < 0):
        new = term + coso
        nums.append(new)
        term = new
    # not negative
    else:
        # if its alreday been visited
        if(term-coso in nums):
            new = term + coso
            nums.append(new)
            term = new
        else:
            new = term - coso
            nums.append(new)
            term = new
    addSemi(nums[-2], nums[-1])


ax.set_xlim(0, max(nums))
ax.set_ylim(-max(nums)/2, max(nums)/2)
plt.axis("off")
plt.savefig("recaman.jpg")
plt.show()
