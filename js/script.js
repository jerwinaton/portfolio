$(document).ready(() => {
  // scroll to lets connect
  var hash = window.location.hash;
  console.log(hash);
  if (hash == "#letsConnect") {
    $("html, body").animate(
      {
        scrollTop: $("#letsConnect").offset().top,
      },
      200
    );
  }

  $("#letsConnectLink").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#letsConnect").offset().top,
      },
      200
    );
  });

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

  // hide contact links icons upon page load
  $(".contact-links").find("img").hide();

  // contact links hover show icons
  $(".contact-links").on("mouseover", (obj) => {
    $(obj.currentTarget).find("img").show("fast");
  });

  $(".contact-links").on("mouseleave", (obj) => {
    $(obj.currentTarget).find("img").hide("fast");
  });

  // latest project mouse over
  $(".btn-latest-project").on("mouseover", () => {
    $(".btn-latest-project svg > path").css({
      fill: "#2c4753",
    });
    $(".btn-latest-project svg").css({
      transition: "width .2s ease",
      width: "40",
    });
    $(".btn-latest-project").css({
      color: "#2c4753",
      background: "#ffffff",
    });
  });
  $(".btn-latest-project").on("mouseleave", () => {
    $(".btn-latest-project svg > path").css({
      fill: "#ffffff",
    });
    $(".btn-latest-project svg").css({
      width: "20",
    });
    $(".btn-latest-project").css({
      color: "#ffffff",
      background: "#2c4753",
    });
  });
  // change bg color on scroll **************************************************************************
  $(window).on("scroll", () => {
    var scrollTop = $(window).scrollTop();

    // get who am i distance to top
    let whoAmI = $(".who-am-i").offset().top;
    let whoAmIDistanceToTop = whoAmI - scrollTop;

    // get what i do distance to top
    let whatIDo = $(".what-i-do").offset().top;
    let whatIDoDistanceToTop = whatIDo - scrollTop;

    // get what i do distance to top
    let letsConnect = $(".lets-connect").offset().top;
    let letsConnectDistanceToTop = letsConnect - scrollTop;

    // get sections
    let landingPage = $(".landing-page");
    let whoAmISection = $(".who-am-i > div > div:nth-child(2)");
    let whatIDoSection = $(".what-i-do");
    let letsConnectSection = $(".lets-connect");

    // add transition options to the sections' background property
    landingPage.css("transition", "background .3s ease");
    $("#profile-image-circle").css("transition", "background .3s ease");

    whoAmISection.css("transition", "background .3s ease");
    whatIDoSection.css("transition", "background .3s ease");
    $(".project-images-container").css("transition", "background .3s ease");

    letsConnectSection.css("transition", "background .3s ease");

    // who am i section change
    if (whoAmIDistanceToTop >= 300) {
      // add color to body to prevent the lines between sections to be seen
      $("body").css({
        background: "var(--lightbluegray)",
      });

      whoAmISection.css({
        background: "var(--lightbluegray)",
      });
      $("#profile-image-circle").css("fill", "var(--darkbluegray)");
      landingPage.css({ background: "var(--lightbluegray)" });
      $(".contact-links").css({ background: "var(--darkbluegray)" });
    } else if (whoAmIDistanceToTop < 300) {
      // add color to body to prevent the lines between sections to be seen
      $("body").css({
        background: "var(--lightmaroon)",
      });

      whoAmISection.css("background", "var(--lightmaroon)");
      $("#profile-image-circle").css("fill", "var(--darkmaroon)");

      landingPage.css("background", "var(--lightmaroon)");
      whatIDoSection.css("background", "var(--lightmaroon)");

      $(".project-images-container").css("background", "var(--lightmaroon)");
      $(".btn-latest-project").css("background", "var(--darkmaroon)");

      $(".contact-links").css({ background: "var(--darkmaroon)" });

      // latest project mouse over
      $(".btn-latest-project").on("mouseover", () => {
        $(".btn-latest-project svg > path").css({
          fill: "var(--darkmaroon)",
        });
        $(".btn-latest-project svg").css({
          transition: "width .2s ease",
          width: "40",
        });
        $(".btn-latest-project").css({
          color: "var(--darkmaroon)",
          background: "#ffffff",
        });
      });
      $(".btn-latest-project").on("mouseleave", () => {
        $(".btn-latest-project svg > path").css({
          fill: "#ffffff",
        });
        $(".btn-latest-project svg").css({
          width: "20",
        });
        $(".btn-latest-project").css({
          color: "#ffffff",
          background: "var(--darkmaroon)",
        });
      });
    }

    // who i do section change
    if (whatIDoDistanceToTop < 300) {
      // add color to body to prevent the lines between sections to be seen
      $("body").css({
        background: "var(--lightbluegray)",
      });
      whoAmISection.css({
        background: "var(--lightbluegray)",
      });
      whatIDoSection.css({
        background: "var(--lightbluegray)",
      });
      $(".project-images-container").css("background", "var(--lightbluegray)");
      $(".btn-latest-project").css("background", "var(--darkbluegray)");
      // latest project mouse over
      $(".btn-latest-project").on("mouseover", () => {
        $(".btn-latest-project svg > path").css({
          fill: "#2c4753",
        });
        $(".btn-latest-project svg").css({
          transition: "width .2s ease",
          width: "40",
        });
        $(".btn-latest-project").css({
          color: "#2c4753",
          background: "#ffffff",
        });
      });
      $(".btn-latest-project").on("mouseleave", () => {
        $(".btn-latest-project svg > path").css({
          fill: "#ffffff",
        });
        $(".btn-latest-project svg").css({
          width: "20",
        });
        $(".btn-latest-project").css({
          color: "#ffffff",
          background: "#2c4753",
        });
      });
    }
    // end of what i do section

    // let's connect section
    console.log(letsConnectDistanceToTop);
    if (letsConnectDistanceToTop < 300) {
      $(letsConnectSection).addClass("bg-primary");
      $(whatIDoSection).addClass("bg-primary");
      $(".project-images-container").addClass("bg-primary");

      // add color to body to prevent the lines between sections to be seen
      $("body").css(background, "#0d6efd");
    } else {
      $(whatIDoSection).removeClass("bg-primary");
      $(letsConnectSection).removeClass("bg-primary");
      $(".project-images-container").removeClass("bg-primary");
    }
  });
});
