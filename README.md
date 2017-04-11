#### install package

    npm i react-native-swiper --save
    
#### 啟動模擬器 (可設定啟動模擬器)

    react-native run-ios --simulator="iPhone 6s"
    
#### 其它套件使用

    react-native-photo-view
    
    可參考 https://github.com/alwx/react-native-photo-view
    
#### 使用說明
    
    1. Props
    
        基本
        
        (1) horizontal?:bool ＝ true 是否水平滑動 
        
        (2) loop?:bool = true 循環滑動頁面
        
        (3) index?:number = 0 頁面索引
        
        (4> showsButtons?:bool = false 控制切換輪播按鈕顯示
        
        (5) autoplay?:bool = false 自動輪播
        
        自定義樣式 ＆ 內容
        
        (1) width?:number 寬度(全銀幕可預設為 flex:1)
        
        (2) height?:number 高度(全銀幕可預設為 flex:1)
        
        (3) style?:style 設計樣式
        
        (4) loadMinimal?:bool = false 只載入並讀取單一頁面
        
        (5) loadMinimalSize?:number = 1 預載頁面數
        
        (6) loadMinimalLoader?:React$Element = <ActivityIndicator/> 預載頁面讀取元件
        
        分頁標籤
        
        (1) showsPagination?bool = true 顯示分頁標籤
        
        (2) paginationStyle?style = {} 標籤樣式
        
        (3) renderPagination?func(index:number,total:number,context:object) 分頁標籤元件函式
         
        (4) dot?:React$Element = 
                <View style={{backgroundColor:'rgba(0,0,0,.2)', 
                              width: 8, height: 8,
                              borderRadius: 4, margin:3,}} /> 分頁標籤元件 & 樣式
                            
        (5) activeDot?:React$Element = 
                <View style={{backgroundColor:'#007aff', 
                              width: 8, height: 8,
                              borderRadius: 4, margin:3,}} /> 目前選取分頁標籤元件 & 樣式
                              
        (6) dotStyle?:object 自定義分頁標籤元件樣式
        
        (7) dotColor?:string 自定義分頁標籤元件色彩
        
        (8) activeDotColor?:string 目前選取分頁標籤色彩
        
        (9) activeDotStyle:object 目前選取分頁標籤樣式
        
        自動輪播參數
        
        (1) autoplay?:bool = true 啟動自動輪播
        
        (2) autoplay?:number = 2.5 自動輪播延遲時間 (啟用條件:autoplay = {true})
        
        (3) autoplayDirection?:bool = true 輪播方向 (啟用條件:autoplay = {true})
        
        控制切換輪播按鈕
        
        (1) showsButtons?:bool = true 顯示控制按鈕
        
        (2) buttonWrapperStyle?:style = 
                 {backgroundColor: 'transparent', flexDirection: 'row', 
                  position: 'absolute', top: 0, left: 0, flex: 1, 
                  paddingHorizontal: 10, paddingVertical: 10, 
                  justifyContent: 'space-between', alignItems: 'center'} 控制按鈕樣式
                  
        (3) nextButton?:React$Element = <Text style={styles.buttonText}>›</Text> 允許自訂 下一頁 控制按鈕樣式
        
        (4) prevButton?:React$Element = <Text style={styles.buttonText}>›</Text> 允許自訂 上一頁 控制按鈕樣式
        
        子元件屬性
        
        (1) style?:style 子元件樣式
        
        (2) title?:React?Element 子元件內容 (ex. <View title={<Text>Swiper</Text>}}
        
    2. 方法 
    
       (1) scrollBy?:func(index:?number,animated:bool) 滑動索引方法
       
    3. 同 ScrollView 屬性
    
       (1) horizontal?:bool = true 水平滑動
       
       (2) pagingEnabled?:bool = true 水平分頁標籤啟動
       
       (3) showsHorizontalScrollIndicator?:bool = false 顯示水平滑動軸
       
       (4) showsVerticalScrollIndicator?:bool = false 顯示垂直滑動軸
       
       (5) bounces?:bool = false 捲動軸至底部是否有反彈效果 (true)
       
       (6) scrollsToTop?bool = false 捲動至最上方(true)
       
       (7) removeClippedSubviews?bool = true 刪除銀幕外子視圖(可增加滑動效能)
       
       (8) automaticallyAdjustContentInsets?bool = false 是否自動顯示滾動條
       
       (9) scrollEnabled?bool = true 是否可滑動
       
    4. 同 ScrollView 事件
    
       (1) onScrollBeginDrag:func(e,state,context) 滑動動作開始觸發
       
       (2) onMomentumScrollEnd:func(e,state,context) 滑動動作結束觸發
       
       (3) onTouchStartCapture:func(e,state,context) onMomentumScrollEnd 後觸發
       
       (4) onTouchStart:func(e,state,context) 按下時觸發
       
       (5) onTouchEnd:func(e,state,context) 離開時觸發
       
       (6) onResponderRelease:func(e,state,context) 滑動放開後觸發
       
#### 參考資料

    https://github.com/leecade/react-native-swiper
    
       
        