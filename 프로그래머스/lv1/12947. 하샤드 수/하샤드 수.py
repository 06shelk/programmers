def solution(x):
    answer = True
    temp = 0
    org = x
    
    # 한글자씩 꺼내자
    while x > 0:
        num = x % 10
        
        #각각 자리수들을 더함
        temp += num
        x //= 10
        
    #더한 값이 나누어 떨어지면 true
    if  org % temp == 0:
        answer = True
    
    #아니면 false
    else:
        answer = False
        
    return answer