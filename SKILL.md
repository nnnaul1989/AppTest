# Skill: Premier League Odds Dashboard

## Mục đích

Hướng dẫn trợ lý AI làm việc trong dự án dashboard theo dõi lịch thi đấu và tỷ lệ Ngoại Hạng Anh. Đây là ứng dụng web React/TypeScript dùng Vite ở frontend và Express ở backend, lấy dữ liệu từ The Odds API. Giao diện và nội dung hiện tại chủ yếu bằng tiếng Việt.

## Bối cảnh dự án

- Frontend: React 18, TypeScript, Vite.
- Backend: Express và TypeScript (chạy bằng `tsx`).
- Tích hợp dữ liệu: The Odds API; khóa API được đọc từ biến môi trường `ODDS_API_KEY` ở server.
- Mục tiêu giao diện: xem lịch trận, lọc theo ngày, tìm đội bóng và so sánh tỷ lệ.
- Không đưa khóa API hoặc giá trị bí mật vào mã nguồn, log, tài liệu hay phản hồi.

## Cấu trúc chính

- `src/view/App.tsx`: trang dashboard và trạng thái bộ lọc.
- `src/view/components/`: các thành phần giao diện như thẻ trận, sidebar, trạng thái rỗng.
- `src/view/styles.css`: kiểu dáng giao diện.
- `src/hooks/useOdds.ts`: tải và quản lý trạng thái dữ liệu tỷ lệ.
- `src/api/oddsClient.ts`: client gọi endpoint backend.
- `src/data/`: kiểu dữ liệu và hàm định dạng/xử lý đội bóng, tỷ lệ.
- `server/index.ts`: cấu hình Express và endpoint API nội bộ.
- `server/services/oddsApi.ts`: tích hợp The Odds API.

## Quy ước khi chỉnh sửa

1. Giữ UI và thông báo người dùng bằng tiếng Việt, trừ khi yêu cầu tính năng chỉ định ngôn ngữ khác.
2. Giữ khóa API ở backend; frontend chỉ gọi endpoint nội bộ `/api/...`.
3. Tái sử dụng kiểu dữ liệu trong `src/data/types.ts`; cập nhật kiểu khi thay đổi cấu trúc dữ liệu.
4. Đặt thành phần giao diện dùng lại trong `src/view/components/`, logic tải dữ liệu trong hooks/API tương ứng.
5. Giữ phong cách và thiết kế hiện hữu; khi thêm trạng thái giao diện, xử lý tối thiểu trạng thái đang tải, lỗi và không có dữ liệu.
6. Không thêm thư viện mới nếu có thể giải quyết rõ ràng bằng các dependency hiện có.
7. Không sửa hoặc ghi đè file môi trường chứa thông tin nhạy cảm. Dùng `.env.example` để mô tả tên biến cần thiết, không điền giá trị thật.

## Lệnh dự án

- `npm run dev`: chạy đồng thời server và frontend.
- `npm run dev:server`: chạy server ở chế độ theo dõi thay đổi.
- `npm run dev:client`: chạy Vite.
- `npm run build`: kiểm tra TypeScript và tạo bản build frontend.
- `npm start`: chạy server.
- `npm run preview`: xem trước bản build Vite.

## Quy tắc sẽ bổ sung

Các quy tắc dưới đây đang để mở và có thể được cập nhật sau. Khi nhận được quy tắc mới, thêm vào đúng mục hoặc tạo mục riêng, tránh để các chỉ dẫn mâu thuẫn nhau.

- **Quy tắc sản phẩm/nghiệp vụ:** sẽ bổ sung.
- **Quy tắc giao diện và nội dung:** sẽ bổ sung.
- **Quy tắc code và kiến trúc:** sẽ bổ sung.
- **Quy tắc kiểm tra trước khi bàn giao:** sẽ bổ sung.

## Cách làm việc

- Trước khi sửa, đọc các file liên quan và kiểm tra quy ước hiện có trong repository.
- Thực hiện thay đổi nhỏ, đúng phạm vi yêu cầu; không tự ý thay đổi hành vi sản phẩm không liên quan.
- Khi bàn giao, tóm tắt file/hành vi đã đổi và nêu rõ bước kiểm tra đã chạy (nếu có).
