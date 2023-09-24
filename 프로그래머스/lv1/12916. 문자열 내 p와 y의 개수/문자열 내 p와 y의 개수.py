def solution(s):
    answer = True
    
    numP = 0
    numY = 0
    
    # for로 문자열을 돌림
    for char in s:
        
        # p와 P가 있다면 +1
        if char == "p" or char == "P":
            numP += 1
        
        # y와 Y가 있다면 +1
        if char == "y" or char == "Y":
            numY += 1
        
    #p와 y의 개수가 같으면 true
    return numP == numY