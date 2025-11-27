import { TripData } from './types';

export const TRIP_DATA: TripData = {
  "tripName": "峴港會安 6 日遊",
  "days": [
    {
      "day": 1,
      "dateName": "Day 1",
      "location": "峴港",
      "activities": [
        {
          "timeLabel": "晚間",
          "icon": "✈️",
          "title": "抵達峴港機場 (DAD) -> 前往飯店休息",
          "meal": "晚餐自理",
          "accommodation": "峴港",
          "details": {
            "flightNumber": "VJXXX (範例)",
            "hotelName": "Da Nang Riverside Hotel (範例)",
            "modalContent": "電子機票憑證號碼: #TICKET-123456\n座位: 12A, 12B\n航廈: T2"
          }
        }
      ]
    },
    {
      "day": 2,
      "dateName": "Day 2",
      "location": "峴港",
      "activities": [
        {
          "timeLabel": "全日",
          "icon": "📸",
          "title": "巴拿山 (Ba Na Hills) 全日遊",
          "subtitle": "黃金橋、法國村、軌道車、夢幻樂園",
          "meal": "早/午餐(園區內)/晚",
          "accommodation": "峴港",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=Ba+Na+Hills"
        },
        {
          "timeLabel": "推薦",
          "icon": "🍴",
          "title": "推薦餐廳/咖啡館 (峴港)",
          "recommendations": [
            {"name": "Tam Thanh (Hieu Vang)", "address": "29 Nguyễn Thái Học", "mapLink": "https://www.google.com/maps/search/?api=1&query=Tam+Thanh+Hieu+Vang+Da+Nang"},
            {"name": "Ăn Thôi Restaurant", "address": "114 Bạch Đằng", "mapLink": "https://www.google.com/maps/search/?api=1&query=An+Thoi+Restaurant+Da+Nang"},
            {"name": "Cộng Cà Phê", "address": "98-96 Bạch Đằng", "mapLink": "https://www.google.com/maps/search/?api=1&query=Cong+Ca+Phe+Bach+Dang"},
            {"name": "Hải sản Mộc quán Đà Nẵng", "address": "26 Tô Hiến Thành", "mapLink": "https://www.google.com/maps/search/?api=1&query=Moc+Quan+Da+Nang"}
          ]
        }
      ]
    },
    {
      "day": 3,
      "dateName": "Day 3",
      "location": "峴港 -> 會安",
      "activities": [
        {
          "timeLabel": "上午",
          "icon": "📸",
          "title": "峴港景點：五行山、美溪沙灘",
          "meal": "早/午/晚",
          "accommodation": "會安",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=Marble+Mountains+Da+Nang"
        },
        {
          "timeLabel": "下午",
          "icon": "🏨",
          "title": "前往會安飯店",
          "details": {
            "hotelName": "Little Hoi An (範例)",
            "address": "會安某處",
            "modalContent": "訂房代號: #BOOKING-HOIAN-999\n房型: Deluxe River View"
          }
        },
        {
          "timeLabel": "推薦",
          "icon": "🍴",
          "title": "推薦餐廳 (峴港)",
          "recommendations": [
            {"name": "Bánh Xèo Bà Dưỡng", "address": "280/23 Hoàng Diệu", "mapLink": "https://www.google.com/maps/search/?api=1&query=Banh+Xeo+Ba+Duong"},
            {"name": "Hủ tiếu mực Thuận Thành", "address": "226-228 Hồ Nghinh", "mapLink": "https://www.google.com/maps/search/?api=1&query=Hu+Tieu+Muc+Thuan+Thanh"},
            {"name": "Bếp Cuốn Đà Nẵng", "address": "31-33 Trần Bạch Đằng", "mapLink": "https://www.google.com/maps/search/?api=1&query=Bep+Cuon+Da+Nang"}
          ]
        }
      ]
    },
    {
      "day": 4,
      "dateName": "Day 4",
      "location": "會安",
      "activities": [
        {
          "timeLabel": "全日",
          "icon": "📸",
          "title": "會安古城深度遊",
          "meal": "早/午/晚",
          "accommodation": "會安",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=Hoi+An+Ancient+Town"
        },
        {
          "timeLabel": "晚間",
          "icon": "🎭",
          "title": "會安記憶表演 (Hoi An Memory Show) -> 夜市放水燈",
          "details": {
            "showTime": "20:00",
            "modalContent": "門票 QR Code: [模擬 QR]\n座位區域: Eco Zone\n排數: H, 座號: 10-12"
          }
        },
        {
          "timeLabel": "推薦",
          "icon": "🍴",
          "title": "推薦餐廳/小吃 (會安)",
          "recommendations": [
            {"name": "Bánh Mì Phượng", "address": "2b Đ. Phan Chu Trinh", "mapLink": "https://www.google.com/maps/search/?api=1&query=Banh+Mi+Phuong"},
            {"name": "Quán Cao lầu Bá Lễ", "address": "49/3 Trần Hưng Đạo", "mapLink": "https://www.google.com/maps/search/?api=1&query=Cao+Lau+Ba+Le"},
            {"name": "Cơm Linh - Vietnamese Restaurant", "address": "42 Đ. Phan Chu Trinh", "mapLink": "https://www.google.com/maps/search/?api=1&query=Com+Linh+Hoi+An"},
            {"name": "Mót Hội An - Nước Thảo Mộc Sả Chanh", "address": "150 Trần Phú", "mapLink": "https://www.google.com/maps/search/?api=1&query=Mot+Hoi+An"}
          ]
        }
      ]
    },
    {
      "day": 5,
      "dateName": "Day 5",
      "location": "會安 -> 峴港",
      "activities": [
        {
          "timeLabel": "上午",
          "icon": "🕌",
          "title": "美山聖地 半日遊 -> 返回峴港",
          "meal": "早/午/晚",
          "accommodation": "峴港",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=My+Son+Sanctuary"
        },
        {
          "timeLabel": "下午",
          "icon": "🛍️",
          "title": "韓市場採購",
          "mapLink": "https://www.google.com/maps/search/?api=1&query=Han+Market+Da+Nang"
        }
      ]
    },
    {
      "day": 6,
      "dateName": "Day 6",
      "location": "峴港 (返程)",
      "activities": [
        {
          "timeLabel": "上午",
          "icon": "🚶",
          "title": "峴港市區悠閒時光",
          "meal": "早/午",
          "accommodation": "無"
        },
        {
          "timeLabel": "中午",
          "icon": "✈️",
          "title": "前往機場 (返程)",
          "details": {
            "flightNumber": "VJYYY (範例)",
            "modalContent": "登機櫃檯: C 區\n起飛時間: 14:30"
          }
        }
      ]
    }
  ]
};