def solution(n):
    answer = 0
    
    temp = ''
    
    k = sorted(str(n), reverse = True)
    
    for i in range(len(k)):
        
        temp += k[i]
        
        answer = int(temp)
    
    
    return answer


# 배열 temp 