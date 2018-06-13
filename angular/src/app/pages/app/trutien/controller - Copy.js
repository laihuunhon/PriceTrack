export default class TruTienController {
  constructor($scope, $timeout) {
    'ngInject'

    Object.assign(this, { $scope, $timeout })

    this.selectedMenu = 1
    this.selectedHero = ''
    this.mixHeroList = [{
      selectedHero: ''
    }, {
      selectedHero: ''
    }, {
      selectedHero: ''
    }, {
      selectedHero: ''
    }, {
      selectedHero: ''
    }, {
      selectedHero: ''
    }]
    this.data = {
      'tam_dieu_phu_nhan': {
        'quy_vuong': {
          'sinh_luc': 169050
        },
        'bich_dao': {
          'phong_thu': 4830
        },
        'dien_bat_dich': {
          'tan_cong': 4830
        },
        'kim_binh_nhi': {
          'chan_khi': 30120
        },
      },
      'truong_tieu_pham': {
        'luc_tuyet_ky': {
          'tan_cong': 2900
        },
        'lam_kinh_vu': {
          'sinh_luc': 101400
        },
        'dien_bat_dich': {
          'chinh_xac': 9760
        },
        'bich_dao': {
          'ne_tranh': 3900
        },
      },
      'bich_dao': {
        'quy_le': {
          'tan_cong': 2900
        },
        'quy_vuong': {
          'chinh_xac': 9760
        },
        'kim_binh_nhi': {
          'tang_tat_ca': 7200
        },
        'luc_tuyet_ky': {
          'khang_bao': 15600
        },
      },
      'dien_bat_dich': {
        'dao_huyen_chan_nhan': {
          'tang_sat_thuong_bao_kich': 900
        },
        'to_nhu': {
          'tan_cong': 2900
        },
        'dien_linh_nhi': {
          'tang_tat_ca': 7200
        },
        'tong_dai_nhan': {
          'phong_thu': 2900
        },
      },
      'to_nhu': {
        'truong_tieu_pham': {
          'phong_thu': 2420
        },
        'dien_bat_dich': {
          'chinh_xac': 8130
        },
        'dien_linh_nhi': {
          'tang_tat_ca': 6000
        },
        'te_hao': {
          'phong_thu': 2420
        },
      },
      'tang_thu_thu': {
        'truong_tieu_pham': {
          'tang_sat_thuong_bao_kich': 750
        },
        'luc_tuyet_ky': {
          'chan_khi': 15060
        },
        'te_hao': {
          'bao_kich': 8130
        },
        'phap_tuong': {
          'chinh_xac': 8130
        },
      },
      'phap_tuong': {
        'luc_tuyet_ky': {
          'tan_cong': 2420
        },
        'pho_tri': {
          'ne_tranh': 3250
        },
        'te_hao': {
          'tang_tat_ca': 6000
        },
        'tang_thu_thu': {
          'ne_tranh': 3250
        },
      },
      'dien_linh_nhi': {
        'truong_tieu_pham': {
          'tang_sat_thuong_bao_kich': 600
        },
        'dien_bat_dich': {
          'ne_tranh': 2600
        },
        'to_nhu': {
          'tan_cong': 1930
        },
        'te_hao': {
          'bao_kich': 6500
        },
      },
      'van_man': {
        'luc_tuyet_ky': {
          'tan_cong': 1930
        },
        'to_nhu': {
          'bao_kich': 6500
        },
        'tong_dai_nhan': {
          'chan_khi': 12050
        },
        'dien_linh_nhi': {
          'sinh_luc': 67600
        },
      },
      'tong_dai_nhan': {
        'dien_bat_dich': {
          'khang_bao': 1930
        },
        'tang_thu_thu': {
          'tan_cong': 1930
        },
        'dien_linh_nhi': {
          'sinh_luc': 67600
        },
        'van_man': {
          'giam_sat_thuong_bao_kich': 1200
        },
      },
      'da_cau_dao_nhan': {
        'chu_nhat_tien': {
          'giam_sat_thuong_bao_kich': 1200
        },
        'bich_dao': {
          'chinh_xac': 6500
        },
        'tieu_hoan': {
          'phong_thu': 1930
        },
        'tan_vo_viem': {
          'khang_tat_ca': 4800
        },
      },
      'tam_vi': {
        'truong_tieu_pham': {
          'chan_khi': 12050
        },
        'bich_dao': {
          'tang_sat_thuong_bao_kich': 600
        },
        'kim_binh_nhi': {
          'tang_tat_ca': 4800
        },
        'luc_vi': {
          'phong_thu': 1930
        },
      },
      'quy_le': {
        'quy_vuong': {
          'sinh_luc': 112700
        },
        'dao_huyen_chan_nhan': {
          'tang_sat_thuong_bao_kich': 1000
        },
        'luc_tuyet_ky': {
          'chinh_xac': 10840
        },
        'bich_dao': {
          'bao_kich': 10840
        },
      },
      'dao_huyen_chan_nhan': {
        'quy_le': {
          'phong_thu': 3220
        },
        'luc_tuyet_ky': {
          'tan_cong': 3220
        },
        'lam_kinh_vu': {
          'sinh_luc': 112700
        },
        'dien_bat_dich': {
          'chinh_xac': 10840
        },
      },
      'quy_vuong': {
        'quy_le': {
          'chinh_xac': 10840
        },
        'doc_than': {
          'phong_thu': 3220
        },
        'chu_nhat_tien': {
          'giam_sat_thuong_bao_kich': 2000
        },
        'bich_dao': {
          'ne_tranh': 4330
        },
      },
      'doc_than': {
        'quy_vuong': {
          'sinh_luc': 112700
        },
        'chu_nhat_tien': {
          'giam_sat_thuong_bao_kich': 2000
        },
        'kim_binh_nhi': {
          'chan_khi': 20080
        },
        'tan_vo_viem': {
          'khang_tat_ca': 8000
        },
      },
      'luc_tuyet_ky': {
        'dao_huyen_chan_nhan': {
          'tang_sat_thuong_bao_kich': 900
        },
        'truong_tieu_pham': {
          'phong_thu': 2900
        },
        'tang_thu_thu': {
          'bao_kich': 9760
        },
        'bich_dao': {
          'ne_tranh': 3900
        },
      },
      'kim_binh_nhi': {
        'quy_le': {
          'tan_cong': 2900
        },
        'bich_dao': {
          'tang_sat_thuong_bao_kich': 900
        },
        'tan_vo_viem': {
          'khang_tat_ca': 7200
        },
        'tieu_hoan': {
          'khang_bao': 15600
        },
      },
      'lam_kinh_vu': {
        'dao_huyen_chan_nhan': {
          'chan_khi': 18070
        },
        'truong_tieu_pham': {
          'phong_thu': 2900
        },
        'pho_tri': {
          'ne_tranh': 3900
        },
        'te_hao': {
          'khang_tat_ca': 7200
        },
      },
      'chu_nhat_tien': {
        'quy_le': {
          'tan_cong': 2900
        },
        'quy_vuong': {
          'sinh_luc': 101400
        },
        'tieu_hoan': {
          'sinh_luc': 101400
        },
        'kim_binh_nhi': {
          'tang_sat_thuong_bao_kich': 900
        },
      },
      'tieu_bach': {
        'truong_tieu_pham': {
          'sinh_luc': 152100
        },
        'luc_tuyet_ky': {
          'chan_khi': 27105
        },
        'bich_dao': {
          'phong_thu': 4350
        },
        'tam_vi': {
          'tan_cong': 4350
        },
      },
      'tieu_hoan': {
        'quy_le': {
          'chan_khi': 15060
        },
        'chu_nhat_tien': {
          'giam_sat_thuong_bao_kich': 1500
        },
        'kim_binh_nhi': {
          'tang_tat_ca': 6000
        },
        'da_cau_dao_nhan': {
          'phong_thu': 2420
        },
      },
      // 'pho_tri': {
      //   'dao_huyen_chan_nhan': {
      //     'tang_sat_thuong_bao_kich': 750
      //   },
      //   'truong_tieu_pham': {
      //     'phong_thu': 2420
      //   },
      //   'lam_kinh_vu': {
      //     'sinh_luc': 84500
      //   },
      //   'phap_tuong': {
      //     'chinh_xac': 8130
      //   },
      // },
      // 'te_hao': {
      //   'lam_kinh_vu': {
      //     'tang_sat_thuong_bao_kich': 750
      //   },
      //   'luc_tuyet_ky': {
      //     'tan_cong': 2420
      //   },
      //   'tang_thu_thu': {
      //     'giam_sat_thuong_bao_kich': 1500
      //   },
      //   'dien_linh_nhi': {
      //     'sinh_luc': 84500
      //   },
      // },
      // 'tan_vo_viem': {
      //   'quy_le': {
      //     'tan_cong': 2420
      //   },
      //   'doc_than': {
      //     'chan_khi': 15060
      //   },
      //   'kim_binh_nhi': {
      //     'khang_tat_ca': 6000
      //   },
      //   'da_cau_dao_nhan': {
      //     'ne_tranh': 3250
      //   },
      // },
      // 'luc_vi': {
      //   'truong_tieu_pham': {
      //     'sinh_luc': 67600
      //   },
      //   'bich_dao': {
      //     'giam_sat_thuong_bao_kich': 1200
      //   },
      //   'kim_binh_nhi': {
      //     'khang_tat_ca': 4800
      //   },
      //   'tam_vi': {
      //     'tan_cong': 1930
      //   },
      // },
      // 'ngoc_duong_tu': {
      //   'quy_vuong': {
      //     'phong_thu': 4830
      //   },
      //   'doc_than': {
      //     'chinh_xac': 16260
      //   },
      //   'tam_dieu_phu_nhan': {
      //     'tang_sat_thuong_bao_kich': 1500
      //   },
      //   'tam_vi': {
      //     'tan_cong': 4830
      //   },
      // },
      // 'van_kiem_nhat': {
      //   'dao_huyen_chan_nhan': {
      //     'tan_cong': 4830
      //   },
      //   'dien_bat_dich': {
      //     'sinh_luc': 169050
      //   },
      //   'lam_kinh_vu': {
      //     'giam_sat_thuong_bao_kich': 3000
      //   },
      //   'u_co': {
      //     'phong_thu': 4830
      //   },
      // },
      // 'pho_hoang': {
      //   'dao_huyen_chan_nhan': {
      //     'phong_thu': 4830
      //   },
      //   'pho_duc': {
      //     'tang_sat_thuong_bao_kich': 1500
      //   },
      //   'pho_phuong': {
      //     'tan_cong': 4830
      //   },
      //   'phap_tuong': {
      //     'sinh_luc': 169050
      //   },
      // },
      // 'kim_linh_phu_nhan': {
      //   'hac_tam_lao_nhan': {
      //     'tan_cong': 4830
      //   },
      //   'tam_dieu_phu_nhan': {
      //     'ne_tranh': 6495
      //   },
      //   'kim_binh_nhi': {
      //     'giam_sat_thuong_bao_kich': 3000
      //   },
      //   'bach_ho': {
      //     'tang_sat_thuong_bao_kich': 1500
      //   },
      // },
      // 'hac_tam_lao_nhan': {
      //   'kim_linh_phu_nhan': {
      //     'sinh_luc': 169050
      //   },
      //   'doc_than': {
      //     'chinh_xac': 16260
      //   },
      //   'chu_nhat_tien': {
      //     'phong_thu': 4830
      //   },
      //   'thanh_long': {
      //     'tan_cong': 4830
      //   },
      // },
      // 'pho_duc': {
      //   'quy_le': {
      //     'chinh_xac': 14640
      //   },
      //   'lam_kinh_vu': {
      //     'bao_kich': 14640
      //   },
      //   'pho_tri': {
      //     'tan_cong': 4350
      //   },
      //   'ngoc_duong_tu': {
      //     'sinh_luc': 152100
      //   },
      // },
      // 'thanh_long': {
      //   'u_co': {
      //     'phong_thu': 4350
      //   },
      //   'ngoc_duong_tu': {
      //     'giam_sat_thuong_bao_kich': 2700
      //   },
      //   'quy_vuong': {
      //     'sinh_luc': 152100
      //   },
      //   'tieu_bach': {
      //     'chinh_xac': 14640
      //   },
      // },
      // 'u_co': {
      //   'thanh_long': {
      //     'tan_cong': 4350
      //   },
      //   'van_kiem_nhat': {
      //     'sinh_luc': 152100
      //   },
      //   'quy_le': {
      //     'ne_tranh': 5850
      //   },
      //   'bich_dao': {
      //     'tang_sat_thuong_bao_kich': 1350
      //   },
      // },
      // 'bach_ho': {
      //   'huyen_vu': {
      //     'phong_thu': 4350
      //   },
      //   'kim_linh_phu_nhan': {
      //     'sinh_luc': 152100
      //   },
      //   'quy_le': {
      //     'bao_kich': 14640
      //   },
      //   'chu_nhat_tien': {
      //     'tang_sat_thuong_bao_kich': 1350
      //   },
      // },
      // 'huyen_vu': {
      //   'bach_ho': {
      //     'tang_tat_ca': 10800
      //   },
      //   'hac_tam_lao_nhan': {
      //     'chan_khi': 27105
      //   },
      //   'quy_vuong': {
      //     'khang_bao': 23400
      //   },
      //   'tieu_hoan': {
      //     'giam_sat_thuong_bao_kich': 2700
      //   },
      // },
      // 'pho_phuong': {
      //   'pho_hoang': {
      //     'giam_sat_thuong_bao_kich': 2250
      //   },
      //   'pho_duc': {
      //     'phong_thu': 3630
      //   },
      //   'pho_tri': {
      //     'tan_cong': 3630
      //   },
      //   'phap_tuoong': {
      //     'sinh_luc': 126750
      //   },
      // },
    }

    $scope.$watch(() => this.mixHeroList, () => {
      this.calculateMixHeroes()
    }, true)

    this.paginationFixedCalculateCombineProperty = []
    this.startCalculateAllCombinations()

    const columnDefs = [{
      headerName: "Trận",
      field: "combination",
      suppressSorting: true,
      cellRenderer: (params) => {
        let result = []
        params.value.forEach(item => {
          result.push(this.renderText(item))
        })
        return result.slice(0, 2).join(',') + '<br />' + result.slice(2,4).join(',') + '<br />' + result.slice(4).join(',')
      }
    }, {
      headerName: "Tình duyên",
      field: "relationCount",
      width: 100,
    },
      {headerName: "Tấn công", field: "tan_cong", width: 100},
      {headerName: "Sinh lực", field: "sinh_luc", width: 100},
      {headerName: "Phòng thủ", field: "phong_thu", width: 100},
      {headerName: "Chân khí", field: "chan_khi", width: 100},
      {headerName: "Chính xác", field: "chinh_xac", width: 100},
      {headerName: "Né tránh", field: "ne_tranh", width: 100},
      {headerName: "Bạo kích", field: "bao_kich", width: 100},
      {headerName: "Tăng tất cả", field: "tang_tat_ca", width: 100},
      {headerName: "Kháng tất cả", field: "khang_tat_ca", width: 100},
      {headerName: "Kháng bạo", field: "khang_bao", width: 100},
      {headerName: "Tăng ST bạo", field: "tang_sat_thuong_bao_kich", width: 100},
      {headerName: "Giảm ST bạo", field: "giam_sat_thuong_bao_kich", width: 100},
    ];
    this.gridOptions = {
      columnDefs,
      rowHeight: 75,
      enableSorting: true,
      enableColResize: true,
      pagination: true,
      rowData: this.fixedCalculateCombineProperty,
      overlayLoadingTemplate: '<span class="ag-overlay-loading-center">Loading</span>',
      onSortChanged: () => {
        this.gridOptions.api.hideOverlay()
      },
      // onModelUpdated: () => {
      //   var allColumnIds = [];
      //   columnDefs.forEach( function(columnDef) {
      //     allColumnIds.push(columnDef.field);
      //   });
      //   this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
      // }
    };
    this.sortList = [
      'relationCount',
      'tan_cong',
      'sinh_luc',
      'phong_thu',
      'chan_khi',
      'chinh_xac',
      'ne_tranh',
      'bao_kich',
      'tang_tat_ca',
      'khang_tat_ca',
      'khang_bao',
      'tang_sat_thuong_bao_kich',
      'giam_sat_thuong_bao_kich',
    ]
  }
  renderText(text) {
    switch (text) {
      case 'tam_dieu_phu_nhan':
        return 'Tam Diệu Phu Nhân'
      case 'truong_tieu_pham':
        return 'Trương Tiểu Phàm'
      case 'bich_dao':
        return 'Bích Dao'
      case 'dien_bat_dich':
        return 'Điền Bất Dịch'
      case 'to_nhu':
        return 'Tô Như'
      case 'tang_thu_thu':
        return 'Tăng Thư Thư'
      case 'phap_tuong':
        return 'Pháp Tướng'
      case 'dien_linh_nhi':
        return 'Điền Linh Nhi'
      case 'van_man':
        return 'Văn Mẫn'
      case 'tong_dai_nhan':
        return 'Tống Đại Nhân'
      case 'da_cau_dao_nhan':
        return 'Dã Cẩu Đạo Nhân'
      case 'tam_vi':
        return 'Tam Vĩ'
      case 'quy_le':
        return 'Quỷ Lệ'
      case 'dao_huyen_chan_nhan':
        return 'Đạo Huyền Chân Nhân'
      case 'quy_vuong':
        return 'Quỷ Vương'
      case 'doc_than':
        return 'Độc Thần'
      case 'luc_tuyet_ky':
        return 'Lục Tuyết Kỳ'
      case 'kim_binh_nhi':
        return 'Kim Bình Nhi'
      case 'lam_kinh_vu':
        return 'Lâm Kinh Vũ'
      case 'chu_nhat_tien':
        return 'Chu Nhất Tiên'
      case 'tieu_bach':
        return 'Tiểu Bạch'
      case 'tieu_hoan':
        return 'Tiểu Hoàn'
      case 'pho_tri':
        return 'Phổ Trí'
      case 'te_hao':
        return 'Tề Hạo'
      case 'tan_vo_viem':
        return 'Tần Vô Viêm'
      case 'luc_vi':
        return 'Lục Vĩ'
      case 'ngoc_duong_tu':
        return 'Ngọc Dương Tử'
      case 'van_kiem_nhat':
        return 'Vạn Kiếm Nhất'
      case 'pho_hoang':
        return 'Phổ Hoằng'
      case 'kim_linh_phu_nhan':
        return 'Kim Linh Phu Nhan'
      case 'hac_tam_lao_nhan':
        return 'Hắc Tâm Lão Nhân'
      case 'pho_duc':
        return 'Phổ Đức'
      case 'thanh_long':
        return 'Thanh Long'
      case 'u_co':
        return 'U Cơ'
      case 'bach_ho':
        return 'Bạch Hổ'
      case 'huyen_vu':
        return 'Huyền Vũ'
      case 'pho_phuong':
        return 'Phổ Phương'
      case 'tan_cong':
        return 'Tấn công'
      case 'sinh_luc':
        return 'Sinh lực'
      case 'phong_thu':
        return 'Phòng thủ'
      case 'chan_khi':
        return 'Chân khí'
      case 'chinh_xac':
        return 'Chính xác'
      case 'ne_tranh':
        return 'Né tránh'
      case 'bao_kich':
        return 'Bạo kích'
      case 'tang_tat_ca':
        return 'Tăng tất cả'
      case 'khang_bao':
        return 'Kháng bạo'
      case 'tang_sat_thuong_bao_kich':
        return 'Tăng ST bạo'
      case 'giam_sat_thuong_bao_kich':
        return 'Giảm ST bạo'
      case 'relationCount':
        return 'Tình duyên'
      case 'khang_tat_ca':
        return 'Kháng tất cả'
      default:
        return text
    }
  }
  addMixHero() {
    if (this.mixHeroList.length < 6) {
      this.mixHeroList.push({
        selectedHero: ''
      })
    }
  }
  calculateMixHeroes() {
    this.combineProperty = []
    this.mixHeroList.forEach(mixHero => {
      const heroProp = mixHero.selectedHero
      if (heroProp !== '') {
        Object.keys(this.data[heroProp]).forEach(relationHero => {
          const checkRelation = this.mixHeroList.filter(item => item.selectedHero === relationHero)
          if (checkRelation.length > 0) {
            this.combineProperty.push(this.data[heroProp][relationHero])
          }
        })
      }
    })
    // "[{"tan_cong":2900},{"tan_cong":8130}]"
    console.log(this.combineProperty)
    this.filterCombineProperty = {}
    this.combineProperty.forEach(item => {
      const propName = Object.keys(item)[0]
      if (!this.filterCombineProperty[propName]) {
        this.filterCombineProperty[propName] = item[propName]
      } else {
        this.filterCombineProperty[propName] += item[propName]
      }
    })
    console.log(this.filterCombineProperty)
  }
  getCombinations(array, size, start, initialStuff, output) {
    if (initialStuff.length >= size) {
      output.push(initialStuff);
    } else {
      let i;
      for (i = start; i < array.length; ++i) {
        this.getCombinations(array, size, i + 1, initialStuff.concat(array[i]), output);
      }
    }
  }
  getAllPossibleCombinations(array, size, output) {
    this.getCombinations(array, size, 0, [], output);
  }
  startCalculateAllCombinations() {
    this.allPossibleCombinations = []
    this.fixedCalculateCombineProperty = []
    this.getAllPossibleCombinations(Object.keys(this.data), 6, this.allPossibleCombinations);
    this.allPossibleCombinations.forEach(item => {
      this.calculateMixedHeroesByCombination(item);
    })
    console.log(this.fixedCalculateCombineProperty[0])
  }
  calculateMixedHeroesByCombination(combination) {
    const combineProperty = []
    combination.forEach(heroProp => {
      if (heroProp !== '') {
        Object.keys(this.data[heroProp]).forEach(relationHero => {
          const checkRelation = combination.filter(item => item === relationHero)
          if (checkRelation.length > 0) {
            combineProperty.push(this.data[heroProp][relationHero])
          }
        })
      }
    })
    const filterCombineProperty = {}
    combineProperty.forEach(item => {
      const propName = Object.keys(item)[0]
      if (!filterCombineProperty[propName]) {
        filterCombineProperty[propName] = item[propName]
      } else {
        filterCombineProperty[propName] += item[propName]
      }
    })
    combination.forEach(heroProp => {
      heroProp = this.renderText(heroProp)
      return heroProp
    })
    this.fixedCalculateCombineProperty.push(Object.assign({
      combination,
      relationCount: combineProperty.length
    }, filterCombineProperty))
  }
  multipleSort() {
    this.gridOptions.api.showLoadingOverlay()
    this.$timeout(() => {
      const sort = []
      if (this.sortBy1) {
        sort.push({
          colId: this.sortBy1,
          sort: 'desc'
        })
      }
      if (this.sortBy2) {
        sort.push({
          colId: this.sortBy2,
          sort: 'desc'
        })
      }
      if (this.sortBy3) {
        sort.push({
          colId: this.sortBy3,
          sort: 'desc'
        })
      }
      if (this.sortBy4) {
        sort.push({
          colId: this.sortBy4,
          sort: 'desc'
        })
      }

      this.gridOptions.api.setSortModel(sort);
    }, 100)
  }
}
