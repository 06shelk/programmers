def solution(seoul):
    answer = ''
    
    # seoul을 for로 돌림
    for i in range(len(seoul)):
        
        #kim이 있다면
        if seoul[i] == "Kim":
            answer = i

    
    return ('김서방은 ' + str(answer) + '에 있다')