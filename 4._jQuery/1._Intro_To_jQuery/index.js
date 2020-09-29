
$('#teleport-btn').click(() => {
    const tempLeft = $(".input-left").val();
    $(".input-left").val($(".input-right").val());
    $(".input-right").val(tempLeft);
});
