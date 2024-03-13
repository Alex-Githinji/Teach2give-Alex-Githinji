def is_power_of_two(n):
  
    return n > 0 and (n & (n - 1)) == 0
 
print(is_power_of_two(5))   
print(is_power_of_two(16))  
print(is_power_of_two(9))  
print(is_power_of_two(4))   
print(is_power_of_two(20))  
print(is_power_of_two(68))   
print(is_power_of_two(687)) 