# Tiktok UI - ReactJS

Repository này dùng để clone lại UI của Tiktok, với mục đích luyện tập trong quá trình học và làm quen với ReactJs. Nếu bạn có bất cứ ý kiến đóng góp nào để cải thiện repository này tôi sẽ rất vui lòng lắng nghe và học hỏi. Xin cảm ơn!

## Cách sử dụng

Bước 1: Clone dự án về môi trường local

Bước 2: cài đặt các thư viện cần thiết cho template

### `npm i`

Bước 3: Chạy dự án ở chế độ develop

### `npm start`

Bước 4: Build source code ra dạng đã hoàn thiện và tối ưu

### `npm run build`

## Các bản cập nhật

##### 31/12/2022

###### Initialize project using Create React App

\_ Khởi tạo dự án bằng lệnh Create React App

###### Cài đặt babel-plugin-module-resolver

_ Cài đặt plugin babel-plugin-module-resolver
_ Dùng để cải thiện độ dài của đường dẫn khi import

###### Cài đặt và cấu hình Prettier

_ Cấu hình extention Prettier
_ Có thể tự động format lại code mỗi khi lưu
\_ Yêu cầu cài đặt Prettier extention ở VScode để có thể dùng

##### 01/01/2023

###### Cấu hình sử dụng CSS/SASS

_ Cài thêm thư viện normalize.css dùng để reset lại các thuộc tính CSS
_ Cài thêm thư viện sass để dự án có thể dùng được scss/sass
_ Tạo ra component GlobalStyle cho phép template sử dụng các style cục bộ
_ Bắt đầu set up những CSS cơ bản của template như font-family,...

###### Bổ sung cấu hình sử dụng CSS/SASS

\_ Bổ sung các CSS cục bộ còn thiếu

###### Cấu hình Router/Layout cho dự án

_ Cài đặt react-router-dom cho phép template sử dụng component Link để điều hướng website
_ Tạo sẵn các page sẽ được code chi tiết trong tương lai

##### 02/01/2023

###### Dựng khung Layout mặc định

_ Bổ sung cách dùng className đặc biệt với thư viện classNamesJs
_ Xây dựng khung sườn cho các component quan trọng sử dụng nhiều trong tương lai

###### Xây dựng UI phần Header #1

_ Cài đặt thư viện FontAwesome
_ Xây dựng thô hình dáng ban đầu cho header
\_ Chuẩn bị một vài icon cần sử dụng

###### Xây dựng UI phần Header #2

_ Cài đặt thư viện Tippy
_ làm chi tiết thanh search bar
\_ Fake popup khi nhập dữ liệu tìm kiếm
