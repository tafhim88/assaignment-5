### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

ans:

a. getElementById Purpose: Selects a single element by its unique id.

b. getElementsByClassName Purpose: Selects elements by their class name.

c.querySelector purpose: this is CSS selector return single Element.

d.querySelectorAll purpose : this is also CSS selector and return multiple NodeList .

2. How do you **create and insert a new element into the DOM**?

ans:

1.at first creat an element by "creatElement"

2.then set attributes, classes, or content

3.then insert by "appendchild"

3. What is **Event Bubbling** and how does it work?

ans:

ইভেন্ট বাবেল হচ্ছে যখন কোনো ইভেন্টের উপর ক্লিক করা হয় । তখন সেটা সরাসরি ক্লিক হয় না। সেখানে যাও্যার জন্য ইভেন্ট টা কোথায় আছে সেটার প্যারেন্টেও ডুকতে হয়। এভাবে প্রথমে হেডার, তারপর সেকশান ,তারপর ডিভিশান, তারপর বাটন বা ইভেন্ট। এভাবে পর্যায়ক্রমে যাও্যাকে ইভেন্ট বাবেল বলে।

4. What is **Event Delegation** in JavaScript? Why is it useful?

ans:

ইভেন্ট ডেলিগেশান হলো একটি প্যারেন্ট এলিমেন্টে ইভেন্ট লিসেনার বসানো, যাতে তার চাইল্ড এলিমেন্টগুলোর ইভেন্টগুলোও হ্যান্ডেল করা যায়।

অর্থাৎ, প্রতিটি ছোট এলিমেন্টে আলাদা আলাদা ইভেন্ট বসানোর পরিবর্তে, একবারে প্যারেন্টে ইভেন্ট বসায়।

যখন চাইল্ড এলিমেন্টে ইভেন্ট ঘটে, তা বাবলিং এর মাধ্যমে প্যারেন্টে পৌঁছায় এবং প্যারেন্ট হ্যান্ডলার তা ধরতে পারে।

সুবিধা

কম কোড, ডাইনামিক এলিমেন্টের জন্য কাজ করে, কম ইভেন্ট লিসেনার ব্যবহার করা হয়।

5. What is the difference between **preventDefault() and stopPropagation()** methods?

ans

preventDefault Purpose: Stops the default behavior of an element from happening.

stopPropagation Purpose: Stops the event from bubbling through parent elements.
