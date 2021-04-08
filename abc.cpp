#include<bits/stdc++.h>
using namespace std;
int main(){
    int n, w, i=1, error, flag=0, count=0;
    cout<<"\n Enter number of frames: ";
    cin>>n;
    cout<<"\n Enter window size: ";
    cin>>w;
    srand(time(0));
    error=(rand()%n)+1;
    cout<<"\n Assuming error in frame "<<error;
    cout<<"\n Transferring "<<w<<" frames at a time.\n";
    cout<<"\n SENDER \t\t RECEIVER";
    for(i;i<=n;i++){
        cout<<"\n Frame "<<i<<" sent.";
        if(i==error){
            cout<<"\t\t error";
            flag++;
        }
        else{
            cout<<"\t\t Received";
        }
        count++;
        if(count==w){
            cout<<"\n";
            count=0;
            if(flag){
                cout<<"\n Frame "<<error<<" sent.";
                cout<<"\t\t Received";
                count++;
                flag=0;
            }
        }
    }
    cout<<"\n";
    return 0;
}
