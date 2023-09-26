def solution(numbers):
    answer = -1
    count = 0
    
    for num in numbers:
        for i in range(1, 10):
            if num == i:
                count += num
    
    answer = 45 - count
    return answer

# for로 배열만큼
# for로 10만큼 돌려
# 배열을 한글자씩 읽어야함
# if 로 num이 배열에 있는가?
# 있으면 sum(배열)

