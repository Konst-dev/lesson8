
const postResponse = (url, data) => {
  return new Promise((resolve) => {
    let xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.response);
        resolve(xhr.responseText);
      }
    }

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(data));
  });
}

export default {
  postResponse: postResponse
};
