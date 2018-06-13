export default class TimerController {
  constructor($scope, $interval) {
    'ngInject'

    Object.assign(this, { $scope })

    this.data = [{
      id: 1,
      map: 'Lưu Ba Sơn',
    }, {
      id: 2,
      map: 'Đại Vương Thôn',
    }, {
      id: 3,
      map: 'Tử Trạch 1',
    }, {
      id: 4,
      map: 'Tử Trạch 2',
    }, {
      id: 5,
      map: 'Tử Trạch 3',
    }, {
      id: 6,
      map: 'Phần Hương Cốc',
    }, {
      id: 7,
      map: 'Thất Lý Động',
    }, {
      id: 8,
      map: 'Thập Vạn Đại Sơn',
    }, {
      id: 10,
      map: 'Độc Xà Cốc 1',
    }, {
      id: 11,
      map: 'Độc Xà Cốc 2',
    }, {
      id: 12,
      map: 'Độc Xà Cốc 3',
    }, {
      id: 13,
      map: 'Man Hoang 1',
    }, {
      id: 14,
      map: 'Man Hoang 2',
    }, {
      id: 15,
      map: 'Côn Lôn 1',
    }, {
      id: 16,
      map: 'Côn Lôn 2',
    }, {
      id: 17,
      map: 'Hồng Mông Cổ Địa 1',
    }, {
      id: 18,
      map: 'Hồng Mông Cổ Địa 2',
    }, {
      id: 19,
      map: 'Tu La 1',
    }, {
      id: 20,
      map: 'Tu La 2',
    }, {
      id: 21,
      map: 'Bàn Long Phong 1',
    }, {
      id: 22,
      map: 'Bàn Long Phong 2',
    }]

    $interval(() => {
      console.log('xxx')
      this.data.forEach((item) => {
        let totalSeconds = item.realMinutes * 60 + item.realSeconds
        if (totalSeconds > 0) {
          totalSeconds -= 1
          item.realMinutes = parseInt(totalSeconds / 60)
          item.realSeconds = totalSeconds - item.realMinutes * 60
        }
      })
    }, 1000)
  }
  doApply(item) {
    item.realMinutes = item.minutes
    item.realSeconds = item.seconds
    item.minutes = null
    item.seconds = null
  }
  doReset(item) {
    if (item.id < 9) {
      item.realMinutes = 45
      item.realSeconds = 0
    } else if (item.id < 20) {
      item.realMinutes = 60
      item.realSeconds = 0
    } else {
      item.realMinutes = 90
      item.realSeconds = 0
    }
  }
}
