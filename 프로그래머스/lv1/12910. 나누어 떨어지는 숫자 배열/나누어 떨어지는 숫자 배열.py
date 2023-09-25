def solution(arr, divisor):
    answer = []
    
    # 반복문으로 돌기
    for i in arr:
        # 값이 나누어 떨어지는 값 구하기
        if i % divisor == 0:
            #  answer 배열에 저장
            answer.append(i)     
    
    # 오름차순으로 정리
    answer.sort()
    
    if len(answer) == 0:
        answer.append(-1)
    
    return answer