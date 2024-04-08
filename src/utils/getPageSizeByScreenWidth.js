export function getPageSizeByScreenWidth(screenWidth) {
  if (screenWidth < 500) {
    return 6;
  } else if (screenWidth < 768) {
    return 8;
  } else if (screenWidth < 1024) {
    return 9;
  } else if (screenWidth < 1440) {
    return 12;
  } else {
    return 10;
  }
}
