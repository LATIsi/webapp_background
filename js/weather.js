function onGeoOK(position){
     const lat = position.coords.latitude;
     const lng = position.coords.longitude;
     console.log(position);
     alert("you live it "+lat+lng);
}

function onGeoError(){
     alert("사용권한을 허용하지 않았거나 찾을 수 가 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
// 브라우저에서 wifi, 위치, gps등등 얻어올수 있는 코드.
//getCurrentPosition()는 두개의 인자가 필요. 1개는 실행완료 함수, 다른 1개는 실행 실패함수
// 성공함수는 geolocation 포지션 객체(유저의 위치정보)를 하나 입력받음. 