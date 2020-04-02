function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
function rectangle() {
    return {
      'perimeter' : function(width, height) {
        return 2 * roundFractional(Number(width) + Number(height),1);
      },
      'area': function(width, height) {
        return roundFractional(Number(width)*Number(height),2);
      }
    };
}