// 사용자로부터 점수값을 입력 받는다. 점수값은 정수이다.
// 점수값이 60점 이상이면 "합격입니다"를 출력하고, 60점 미만이면 "불합격입니다."를 출력하라.
// 단, 합격자 중에 90점 이상이면 추가로 "장학대상입니다."를 출력하도록 한다.

#include <stdio.h>

int main() {
    
  int num;    
  printf("점수 입력 : ");
  scanf("%d", &num);
  
  if (num >= 60) {
      printf("합격입니다.");
      if (num >= 90) {
          printf(" 장학대상입니다.");
      }
  } else {
      printf("불합격입니다.");
  }

  return 0;
}