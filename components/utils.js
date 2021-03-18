function int_as_time(it) {
  var s = it % 60;
  var m = ((it - s) % 3600) / 60;
  var h = (it - s - m * 60) / 3600;
  return `${h}:${m}:${s}`;
}

export { int_as_time };
