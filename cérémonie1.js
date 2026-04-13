function promotion (année) {
    var Image;
    if(année==2023){
        Image="promotion_2023.jpg"
    }
    else if (année==2022){
        Image="promotion_2022.jpg"
    }
    else if (année==2021){
        Image = "promotion_2021.jpg"
    }
    document.getElementById("mon_image").src=Image;
}