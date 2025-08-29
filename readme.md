# JavaScript DOM & Event Handling – Questions & Answers
---
## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById()**  
  - এটা মুলত একটা element কে তার **ID দিয়ে** খুঁজে বের করে।  
  - শুধু unique **একটা element** রিটার্ন করে।  
  - যদি Id খুঁজে না পায় তাহলে `null` রিটার্ন করে।  

- **getElementsByClassName()**  
  - এটা একাধিক element কে তাদের **class নাম দিয়ে** খুঁজে বের করে।  
  - একই নামের যত class name আছে তা **HTMLCollection** আকারে রিটার্ন করে। 

- **querySelector()**  
  - এটা মুলত CSS selector দিয়ে **প্রথম যেই element পাবে** সেটাকে রিটার্ন করে। 
  - মানে একাধিক element থাকলেও সবার আগে প্রথমে যেই element থাকবে ওইটা শুধু দেখাবে।

- **querySelectorAll()**  
  - এটা CSS selector দিয়ে **সব element** খুঁজে বের করে।  
  - এই ক্ষেত্রে element গুলো **NodeList** আকারে রিটার্ন হয়।

## 2. How do you create and insert a new element into the DOM?

1. **Element create** → এর জন্য এভাবে `document.createElement("tagName")`  লিখতে হয়।
2. **DOM-এ insert করা** →  এর জন্য `append`, `appendChild` use করা হয়ে থাকে।
   - `.appendChild(newElement)` → এটা দিলে element টা parent এর ভিতর শেষে যোগ হবে। 
   - `.append(newElement)` → এটা দিলে একসাথে একাধিক node বা টেক্সট যোগ করা যায়।  



## 3. What is Event Bubbling and how does it work?
`Event Bubbling` মানে হলো, কোনো child element এ event ঘটলে সেটা আগে ওই element এ কাজ করে, তারপর ধাপে ধাপে তার parent → grandparent → document পর্যন্ত এভাবে `bubble`এ মতো করে উঠে যায়।

Example: একটা button যদি div এর মধ্যে থাকে তখন → button এ ক্লিক করলে event আগে button এ হবে → তারপর div → তারপর body → সবশেষে document এর দিকে চলে যাবে।

## 4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation হলো একটা পদ্ধতি যেখানে parent element এ একটা event listener বসানো হয়, আর event bubbling এর মাধ্যমে child element এর event কে `target`করা যায়।
- মুলত কম event listener ব্যবহার করে সহজভাবে code maintain করতে এটা ব্যবহার করা যায়।

যেমন:

```js
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked on:", e.target.innerText);
  }
});
```



## 5. What is the difference between preventDefault() and stopPropagation() methods?
`preventDefault()`:

কোনো event এর default কাজ বন্ধ করার জন্য use করা হয়।

যেমন: form submit হওয়া বন্ধ করার জন্য এটা use করা হয়।

`stopPropagation()`:

Event কে উপরে bubble হয়ে যাওয়া বন্ধ করতে use করা হয়। মানে, যেখানে আছে সেখানেই off করে দেয়। bubble হয়ে আর উপরে যাবে না।



