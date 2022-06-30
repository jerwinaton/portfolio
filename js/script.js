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

  // changing heading texts below jerwin aton
  let headingTexts = [
    "I Design Websites",
    "I Develop Websites",
    "I'm SEO Literate",
    "Let's Connect!",
  ];
  let counter = 0;
  // $("#changing-heading").css("transition","opacity .2s ease");
  window.setInterval(() => {
    counter++;
    if (counter >= headingTexts.length) {
      counter = 0;
    }
    $("#changing-heading").fadeTo("slow", 0);
    setTimeout(() => {
      $("#changing-heading").text(headingTexts[counter]).fadeTo("slow", 1);
    }, 500);
  }, 2700);

  //project images in what i do section hover images effect
  // $(".project-images-container img").on("mouseover", (obj) => {
  //   console.log($(obj.currentTarget));
  //   $(obj.currentTarget).css({
  //     "z-index": "210",
  //   });
  // });
  // $(".project-images-container img").on("mouseleave", (obj) => {
  //   console.log($(obj.currentTarget));
  //   $(obj.currentTarget).css({
  //     "z-index": "100",
  //   });
  // });
});
