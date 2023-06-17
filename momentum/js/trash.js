// TODO: trash 관련 정리
const trashCan = [];
// toTrash
function toTrash(todo) {
  //  trash date 생성
  todo.delDate = Date.now();
  trashCan.push(todo);
  const cd = new Date(todo.id);
  const dd = new Date(todo.delDate);
  console.log(cd.getDate(), dd.getDate());
}
// return -> return시  id 순으로 정렬
// clean for 5days
function cleanTrashCan() {
  // 5일 계산하기
  // if 5일 안지남
  // trashList 추가
  // trashCan에 trashList 넣기
}
// FIXME 날짜 비교 참고해서 바꾸기
function compareDate(date11, date22) {
  const time1 = new Date('2023-06-01T23:59:00Z'); // May 30, 2023 at 23:59 UTC
  const time2 = new Date('2023-06-02T00:01:00Z'); // June 2, 2023 at 00:01 UTC

  // Adjust the dates to the local time zone
  const localTime1 = new Date(time1.getTime() + time1.getTimezoneOffset() * 60000);
  const localTime2 = new Date(time2.getTime() + time2.getTimezoneOffset() * 60000);

  const date1 = new Date(localTime1.getFullYear(), localTime1.getMonth(), localTime1.getDate());
  const date2 = new Date(localTime2.getFullYear(), localTime2.getMonth(), localTime2.getDate());

  const differenceInMilliseconds = Math.abs(date2 - date1); // Absolute difference in milliseconds

  const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24)); // Difference in days

  console.log(differenceInDays); // Output: 3
}
