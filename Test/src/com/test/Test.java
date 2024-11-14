
package com.test;

public class Test {

	public static void main(String[] args) {
		Test test = new Test();
	}
}

interface A {
	public int add(int a, int b);
	public int sub(int a, int b);
}

class A1 implements A {

	@Override
	public int add(int a, int b) {
		return a + b;
	}

	@Override
	public int sub(int a, int b) {
		return a - b;
	}
	
}

class A2 implements A {

	@Override
	public int add(int a, int b) {
		return a - b;
	}

	@Override
	public int sub(int a, int b) {
		return a + b;
	}
	
}