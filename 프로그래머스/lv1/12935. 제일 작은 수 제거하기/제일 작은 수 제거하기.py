def solution(arr):
    answer = []
    
    min_value = min(arr)
    
    for num in arr:
        if num == min_value:
            continue
        answer.append(num)
    
    if len(arr) <= 1:
        return [-1]
    
    return answer