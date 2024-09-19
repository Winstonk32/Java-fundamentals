function fibonacciSequence(n) {
    const sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    return sequence.slice(0, n); // Ensures the list is trimmed to n elements
  }

  console.log(fibonacciSequence(10));  // Output: [0, 1, 1, 2, 3, 5, 8]