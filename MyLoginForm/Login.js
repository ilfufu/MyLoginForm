document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.pushbutton'); // 登录按钮

    loginButton.addEventListener('click', function() {
        const username = document.querySelector('.username_input_container .input').value; // 获取用户名
        const password = document.querySelector('.password_input_container .input').value; // 获取密码

        // 输入验证
        if (!username && !password) {
            alert('Please enter both username and password.');
            return;
        }
        else if (!username) {
            alert('Please enter correct username.');
            return;
        }
        else if (!password) {
            alert('Password can not be blank.');
            return;
        }

        // 这里使用fetch发送请求，实际应用中应替换为你的登录API
        fetch('your_login_api_url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!'); // 登录成功，可以重定向到其他页面或显示登录成功信息
            } 
            else {
                alert('Login failed: ' + data.message); // 登录失败
            }
        })

        .catch(error => {
            console.error('Error: ', error);
            alert('An error occurred. Please try again later.');
        });
    });
});