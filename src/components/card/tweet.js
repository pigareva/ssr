

function tws(tweet) {
  let permalink = encodeURIComponent("http://bit.ly/2uCwogr");
  let twurl = "https://twitter.com/intent/tweet?";
  let text = encodeURIComponent(tweet);
  let url = `${twurl}text=${text}&url=${permalink}&related=rohitkrops`;
  window.open(url, `Share on Twitter`,"height=500, width=600");
}

module.exports = tws;
