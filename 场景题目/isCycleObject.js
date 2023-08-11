const isCycleObject = (obj, map = [obj]) => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    let isCycle = false;
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (map.includes(element) && typeof element === 'object') {
                return true
            } else {
                typeof element === 'object' && map.push(element);
                isCycleObject(element, [...map]) && (isCycle = true);
            }
        }
    }
    return isCycle;
}

// Test case 1: An object with no cyclic reference
const obj1 = { a: 1, b: 2, c: { d: 3 } };
console.log(isCycleObject(obj1)); // Expected output: false

// Test case 2: An object with a direct cyclic reference
const obj2 = { a: 1 };
obj2.b = obj2;
console.log(isCycleObject(obj2)); // Expected output: true

// Test case 3: An object with an indirect cyclic reference
const obj3 = { a: 1, b: { c: 2 } };
obj3.b.d = obj3;
console.log(isCycleObject(obj3)); // Expected output: true

// Test case 4: An object with a cyclic reference in an array
const obj4 = { a: 1, b: [2, 3] };
obj4.b.push(obj4);
console.log(isCycleObject(obj4)); // Expected output: true

// Test case 5: An object with a cyclic reference to a parent object
const obj5 = { a: 1, b: { c: 2 } };
obj5.b.d = obj5.b;
console.log(isCycleObject(obj5)); // Expected output: true

// Test case 6: An object with a cyclic reference to a sibling object
const obj6 = { a: { b: 1 }, c: { d: 2 } };
obj6.a.e = obj6.c;
obj6.c.f = obj6.a;
console.log(isCycleObject(obj6)); // Expected output: true



// Test case 7: An object with nested objects but no cyclic reference
const obj7 = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(isCycleObject(obj7)); // Expected output: false

// Test case 8: An object with an array but no cyclic reference
const obj8 = { a: 1, b: [2, 3, { c: 4 }] };
console.log(isCycleObject(obj8)); // Expected output: false

// Test case 9: An object with multiple sibling objects but no cyclic reference
const obj9 = { a: { b: 1 }, c: { d: 2 }, e: { f: 3 } };
console.log(isCycleObject(obj9)); // Expected output: false

// Test case 10: An object with a null value
const obj10 = { a: 1, b: null };
console.log(isCycleObject(obj10)); // Expected output: false

// Test case 11: An empty object
const obj11 = {};
console.log(isCycleObject(obj11)); // Expected output: false

// Test case 12: A non-object value (should return false)
console.log(isCycleObject(123)); // Expected output: false