// Задание 269 №1
(function() {
    return function() {
      alert('Результат задачи 269 №1: ' + '!');
    };
  })()(); 
  
  // Задание 269 №2
  console.log('Результат задачи 269 №2:');
  (function(task269_2a) {
    return function(task269_2b) {
      console.log(task269_2a + task269_2b); 
    };
  })(1)(2); 
  
  
  // Задание 269 №3
  console.log('Результат задачи 269 №3:');
  (function(task269_3a) {
      return function(task269_3b) {	
          return function(task269_3c) {	
              console.log(task269_3a + task269_3b + task269_3c);
      };
      };
  })(1)(2)(3);
  // Задание 272 №1 и №2
  console.log('Результат задач 272 №1 и №2:');
  let func = (function() {
    let num = 1;
    return function() {
      console.log(num);
      num++;
      if (num > 5) {
        num = 1;
      }
    }
  })();
  
  func(); 
  func(); 
  func(); 
  func(); 
  func();