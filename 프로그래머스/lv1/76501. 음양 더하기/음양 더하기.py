def solution(absolutes, signs):
    answer = 0
    
    a = 0
    
    for i in range(len(absolutes)):
        if signs[i] == False:
            answer += -absolutes[i]
        else: answer += absolutes[i]
    return answer