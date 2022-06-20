$(document).ready(() => {
  //  profile image hover => change bg and scale
  //   add transition
  $("#profile-img-bg").find("circle").css("transition", "fill .3s ease");
  $("#profile-img-bg").css("transition", "transform .3s ease");
  //   on mouse over change the circle bg color
  //   and scale the image/svg to 1.1
  $("#profile-img-bg").on("mouseover", () => {
    $("#profile-img-bg").find("circle").css("fill", "rgb(49 96 117)");
    $("#profile-img-bg").css("transform", "scale(1.1)");
  });
  //   on mouse over change the circle bg color back to default
  // and scale the image/svg back to default
  $("#profile-img-bg").on("mouseleave", () => {
    $("#profile-img-bg").find("circle").css("fill", "#2C4753");
    $("#profile-img-bg").css("transform", "scale(1)");
  });
});
