#include<iostream>
#include <string>
#include <vector>
#include<algorithm>
using namespace std;

long long solution(long long n) {
    long long answer = 0;
    string str = to_string(n);

    sort(str.begin(),str.end());

    
    for(int i=0; i< str.length(); i++){
        cout << str[i];
    }

    return answer;
}

int main(){
    long long int n;
    cin >> n;
    cout << solution(n);
}

