def solution(arr):
    answer = 0
    temp = 0.0
    
    for nums in arr:
        temp += nums
    
    answer = temp/len(arr) 
    
    return answer