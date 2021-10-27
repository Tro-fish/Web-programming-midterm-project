
           //saved id number
           let saved_account = [1234567890123456,1234579109523489];
           //the number of attempts left
           let attempts = 5;
           //saved password
           let saved_password =1234;
           //login account
           let new_account=0; 
           //number input used to login       
           let input = [];
           //number count used to login
           let num_count = 0;     
           //number count used to update information page 
           let info_count =1;   
           //your initial assets       
           let balance = 2000;
           //the amount to be withdrawn
           let withdraw_money = 0;
           //the amount to be deposit
           let deposit_money = 0;
           //the amount to be transfer
           let transfer_money = 0;
           //number input used to deposit
           let deposit_num = [];

            //update input number to login page
           function num_update(num_count)
           {
            console.log(num_count);
            account = document.getElementById("account");               
            account.type ="password";            
            account.value = pow(num_count);
            account2 = document.getElementById("account2");
            account2.type ="password";            
            account2.value = pow(num_count);    
           }
           //save account number
           function button_0(){  
            num_count++;            
               input.push(0);
               num_update(num_count);                            
           }
           function button_1(){ 
            num_count++;            
               input.push(1);
               num_update(num_count);                           
           }
           function button_2(){    
            num_count++;            
            input.push(2);
            num_update(num_count);                                    
           }
           function button_3(){   
            num_count++;            
            input.push(3);
            num_update(num_count);                                
           }
           function button_4(){  
            num_count++;            
            input.push(4);
            num_update(num_count);                                    
           }
           function button_5(){   
            num_count++;            
            input.push(5);
            num_update(num_count);                                     
           }
           function button_6(){   
            num_count++;            
            input.push(6);
            num_update(num_count);                        
           }
           function button_7(){            
            num_count++;
            input.push(7);
            num_update(num_count);                                     
           }
           function button_8(){   
            num_count++;        
            input.push(8);
            num_update(num_count);                                    
           }
           function button_9(){                     
            num_count++;            
            input.push(9);
            num_update(num_count);                                 
           }           
           //calculate the square of 10
            function pow(i)
            {
                let num = 1;
                for(let k=0;k<i-1;k++)
                {
                    num *= 10;
                }
                return num;
            } 
           //check if the information is correct and go to the next page  
           function enter1()
           {               
               for(let i =0;i<num_count;i++)
               {
                   new_account += input.pop()*pow(i+1);                  
                   console.log(new_account);
               }               
               //if not same then alert
               if(new_account !== saved_account[0])
                {alert("That account number does not exist!")}
               //if same go to next page
               else
               {
                   document.getElementById("page1").style = "display : none";
                   document.getElementById("page2").style = "display : block";
               }
               //initial the page information
               let account = document.getElementById("account");
               let account2 = document.getElementById("account2");
               account.type ="text";
               account.value = "Enter Account Number";
               account2.type ="text";
               account2.value = "Enter PIN";
               new_account =0;               
               num_count =0;               
           }
           //check password similar to enter1
           function enter2()
           {
            for(let i =0;i<num_count;i++)
            {
                new_account += input.pop()*pow(i+1);                  
                console.log(new_account);
            }   

               if(new_account !== saved_account[0])
                {   attempts--;
                    alert("Incorrect PIN. You have " + attempts+ " attempts left")}
               else
               {
                   document.getElementById("page2").style = "display : none";
                   document.getElementById("page3").style = "display : block";
                   attempts = 5;
                   update_info(0,0)
               }
               let account = document.getElementById("account");
               let account2 = document.getElementById("account2");
               account.type ="text";
               account.value = "Enter Account Number";
               account2.type ="text";
               account2.value = "Enter PIN";
               new_account =0;               
               num_count =0;                
           }     
           //go to information page
           function info()
           {
            document.getElementById("page3").style = "display : none";
            document.getElementById("page5").style = "display : block";                  
           }
           //updage information page
           function update_info(fund_out,fund_in)
           {
            let a = document.createElement("tr");   
            if(info_count % 2 == 1)         
                {a.className ="info_gray";}
            else
                {a.className ="info_white";}
            let b = document.createElement("td");
            let c = document.createElement("td");
            let d = document.createElement("td");
            let e = document.createElement("td");
            var now = new Date();
            let date = now;
            document.getElementById("current_balance").innerText ="$" + balance;
            b.innerHTML =date;
            c.innerHTML =fund_out;
            d.innerHTML =fund_in;
            e.innerHTML = balance;
            a.appendChild(b);
            a.appendChild(c);
            a.appendChild(d);
            a.appendChild(e);
            let body = document.getElementById("table_body");
            body.appendChild(a);
            info_count++;
           }
           function deposit()
           {
            document.getElementById("page3").style = "display : none";
            document.getElementById("page11").style = "display : block";
           }
           
           function withdraw()
           {
            document.getElementById("page3").style = "display : none";
            document.getElementById("page7").style = "display : block";
           }
           function with20()
           {
            document.getElementById("page7").style = "display : none";
            document.getElementById("page10").style = "display : block";
            document.getElementById("withmoney").innerHTML = "20$";
            withdraw_money = 20;
           }
           function with40()
           {
            document.getElementById("page7").style = "display : none";
            document.getElementById("page10").style = "display : block";
            document.getElementById("withmoney").innerHTML = "40$";
            withdraw_money = 40;
           }
           function with60()
           {
            document.getElementById("page7").style = "display : none";
            document.getElementById("page10").style = "display : block";
            document.getElementById("withmoney").innerHTML = "60$";
            withdraw_money = 60;
           }
           function with80()
           {
            document.getElementById("page7").style = "display : none";
            document.getElementById("page10").style = "display : block";
            document.getElementById("withmoney").innerHTML = "80$";
            withdraw_money = 80;
           }

           function with100()
           {
            document.getElementById("page7").style = "display : none";
            document.getElementById("page10").style = "display : block";
            document.getElementById("withmoney").innerHTML = "100$";
            withdraw_money = 100;
           }
           function with200()
           {
            document.getElementById("page7").style = "display : none";
            document.getElementById("page10").style = "display : block";
            document.getElementById("withmoney").innerHTML = "200$";
            withdraw_money = 200;
           }
           function with300()
           {
            document.getElementById("page7").style = "display : none";
            document.getElementById("page10").style = "display : block";
            document.getElementById("withmoney").innerHTML = "300$";
            withdraw_money = 300;
           }
           function wt_back()
           {
            document.getElementById("page7").style = "display : none";
            document.getElementById("page3").style = "display : block";
           }
           function wt_yes()
           {
            document.getElementById("page10").style = "display : none";
            document.getElementById("page8").style = "display : block";

            balance -= withdraw_money;
            
            update_info(withdraw_money,0);
            withdraw_money = 0;
            let acc = document.getElementById("account_balance");
            acc.value = "0";
           }
           function wt_no()
           {
            document.getElementById("page10").style = "display : none";
            document.getElementById("page7").style = "display : block";
            withdraw_money = 0;
            let acc = document.getElementById("account_balance");
            acc.value = "0";
           }
           function account_back()
           {
            document.getElementById("page5").style = "display : none";
            document.getElementById("page3").style = "display : block";
           }
           function wt_home()
           {
            document.getElementById("page8").style = "display : none";
            document.getElementById("page3").style = "display : block";
           }
           function wt_with()
           {
            document.getElementById("page8").style = "display : none";
            document.getElementById("page7").style = "display : block";
           }
           function wt_re()
           {
            document.getElementById("page8").style = "display : none";
            document.getElementById("page1").style = "display : block";
           }
           function wt_up100()
           {
                let acc = document.getElementById("account_balance");
                withdraw_money += 100;
                if(withdraw_money > 300)
                {
                    alert("$300 is the limit to withdraw from the ATM");
                    withdraw_money -= 100;
                }
                
                else
                {
                    acc.value = withdraw_money;                    
                }               

           }
           function wt_up20()
           {
            let acc = document.getElementById("account_balance");
            withdraw_money += 20;
            if(withdraw_money > 300)
            {
                alert("$300 is the limit to withdraw from the ATM");
                withdraw_money -= 20;
            }
           
            else
            {
                acc.value = withdraw_money;
            }   
           }
           function wt_down20()
           {
                let acc = document.getElementById("account_balance");
                withdraw_money -= 20;
                if(withdraw_money < 0)
                {
                    alert("You cannot withdraw under 0");
                    withdraw_money += 20;
                }
              
                else
                {
                    acc.value = withdraw_money;
                }               
           }
           function wt_down100()
           {
                let acc = document.getElementById("account_balance");
                withdraw_money -= 100;
                if(withdraw_money < 0)
                {
                    alert("You cannot withdraw under 0");
                    withdraw_money += 100;
                }
            
                else
                {
                    acc.value = withdraw_money;
                }               
           }
           function wt_enter()
           {
            document.getElementById("withmoney").innerHTML = "$"+withdraw_money + "?";
            document.getElementById("page7").style = "display : none";
            document.getElementById("page10").style = "display : block";                   
           }
           function del1()
           {
                
                if(num_count <= 1)
                {
                    document.getElementById("account").value = "Enter Account Number";
                    document.getElementById("account").type = "text";
                    document.getElementById("account2").value = "Enter PIN";
                    document.getElementById("account2").type = "text";
                    num_count =0;
                }     
                else
                {
                    input.pop();
                    --num_count;           
                    num_update(num_count);
                    console.log(input);
                }
           }
           
          
           function update_dnumber(num_count)
           {
            let f = "";
            for(let i=0;i<num_count;i++)
            {    
                 f += deposit_num[i];
            }
            let a = document.getElementById("deposit_account");
            a.value = parseFloat(f);
           }
           function d_button1()
           {
                deposit_num[num_count] = "1";
                num_count++;
                update_dnumber(num_count);
                
           }
           function d_button2()
           {
                deposit_num[num_count] = "2";
                num_count++;
                update_dnumber(num_count);
           }
           function d_button3()
           {
                deposit_num[num_count] = "3";
                num_count++;
                update_dnumber(num_count);
           }
           function d_button4()
           {
                deposit_num[num_count] = "4";
                num_count++;
                update_dnumber(num_count);
           }
           function d_button5()
           {
                deposit_num[num_count] = "5";
                num_count++;
                update_dnumber(num_count);
           }
           function d_button6()
           {
                deposit_num[num_count] = "6";
                num_count++;
                update_dnumber(num_count);
           }
           function d_button7()
           {
                deposit_num[num_count] = "7";
                num_count++;
                update_dnumber(num_count);
           }
           function d_button8()
           {
                deposit_num[num_count] = "8";
                num_count++;
                update_dnumber(num_count);
           }
           function d_button9()
           {
                deposit_num[num_count] = "9";
                num_count++;
                update_dnumber(num_count);
           }
           function d_button0()
           {
                deposit_num[num_count] = "0";
                num_count++;
                update_dnumber(num_count);
           }

           function d_button_p()
           {
                deposit_num[num_count] = ".";
                num_count++;
                update_dnumber(num_count);
           }
           function d_del()
           {
               num_count--;
               update_dnumber(num_count);
           }
           function d_button_enter()
           {
               let f = "";
               for(let i=0;i<num_count;i++)
               {    
                    f += deposit_num[i];
               }
               console.log(parseFloat(f));
               deposit_money = parseFloat(f);               
               document.getElementById("deposit_num").innerHTML = "$"+ deposit_money + "?";
               document.getElementById("page11").style = "display : none";
               document.getElementById("page12").style = "display : block";
               let a = document.getElementById("deposit_account");
                a.value = "$0000.00";
           }
           function deposit_yes()
           {
            let f = "";
            for(let i=0;i<num_count;i++)
            {    
                 f += deposit_num[i];
            }
            deposit_money = parseFloat(f); 
            balance += deposit_money;
            update_info(0,deposit_money);
            document.getElementById("page12").style = "display : none";
            document.getElementById("page13").style = "display : block";
            deposit_money = 0;
            num_count =0;
           }
           function deposit_no()
           {                       
            document.getElementById("page12").style = "display : none";
            document.getElementById("page11").style = "display : block";
            deposit_money = 0;
            num_count =0;
           }
           function deposit_ok()
           {
            document.getElementById("page13").style = "display : none";
            document.getElementById("page14").style = "display : block";
           }
           function de_deposit()
           {
            document.getElementById("page14").style = "display : none";
            document.getElementById("page11").style = "display : block";
           }
           function de_home()
           {
            document.getElementById("page14").style = "display : none";
            document.getElementById("page3").style = "display : block";
           }
           function de_re()
           {
            document.getElementById("page14").style = "display : none";
            document.getElementById("page1").style = "display : block";
           }
           function de_back()
           {
            document.getElementById("page11").style = "display : none";
            document.getElementById("page3").style = "display : block";
            let a = document.getElementById("deposit_account");
            a.value = "$0000.00";
           }
           function ts_from()
           {
               let from = document.getElementById("from");
               from.innerText ="1234567890123456";
           }
           function ts_to()
           {
               let from = document.getElementById("to");
               from.innerText ="1234579109523489";
           }


           function update_tnumber(num_count)
           {
            let f = "";
            for(let i=0;i<num_count;i++)
            {    
                 f += deposit_num[i];
            }
            let a = document.getElementById("transfer_account");
            a.value = parseFloat(f);
           }
           function t_button1()
           {
                deposit_num[num_count] = "1";
                num_count++;
                update_tnumber(num_count);
                
           }
           function t_button2()
           {
                deposit_num[num_count] = "2";
                num_count++;
                update_tnumber(num_count);
           }
           function t_button3()
           {
                deposit_num[num_count] = "3";
                num_count++;
                update_tnumber(num_count);
           }
           function t_button4()
           {
                deposit_num[num_count] = "4";
                num_count++;
                update_tnumber(num_count);
           }
           function t_button5()
           {
                deposit_num[num_count] = "5";
                num_count++;
                update_tnumber(num_count);
           }
           function t_button6()
           {
                deposit_num[num_count] = "6";
                num_count++;
                update_tnumber(num_count);
           }
           function t_button7()
           {
                deposit_num[num_count] = "7";
                num_count++;
                update_tnumber(num_count);
           }
           function t_button8()
           {
                deposit_num[num_count] = "8";
                num_count++;
                update_tnumber(num_count);
           }
           function t_button9()
           {
                deposit_num[num_count] = "9";
                num_count++;
                update_tnumber(num_count);
           }
           function t_button0()
           {
                deposit_num[num_count] = "0";
                num_count++;
                update_tnumber(num_count);
           }

           function t_button_p()
           {
                deposit_num[num_count] = ".";
                num_count++;
                update_tnumber(num_count);
           }
           function t_del()
           {
               num_count--;
               update_tnumber(num_count);
           }
           function t_button_enter()
           {
               let f = "";
               for(let i=0;i<num_count;i++)
               {    
                    f += deposit_num[i];
               }
               console.log(parseFloat(f));
               transfer_money = parseFloat(f);   
               if(transfer_money > balance)
               {
                  alert("The balance of the account is insufficient!");               
               }    
               else
               {                                     
               document.getElementById("deposit_num").innerHTML = "$"+ deposit_money + "?";
               document.getElementById("page15").style = "display : none";
               document.getElementById("page16").style = "display : block";
               document.getElementById("transfer_num").textContent = "$"+transfer_money;
               document.getElementById("transfer_from").textContent = "From "+1234567890123456;
               document.getElementById("transfer_to").textContent = "To "+1234579109523489;
               }
               let a = document.getElementById("transfer_account");
                a.value = "$0000.00";
                num_count =0;
               document.getElementById("from").innerHTML = "Choose an Account";
               document.getElementById("to").innerHTML ="Choose an Account"
           }
           function transfer_yes()
           {
            balance -= transfer_money;
            document.getElementById("page16").style = "display : none";
            document.getElementById("page17").style = "display : block";
            update_info(transfer_money,0);
            transfer_money =0;
           }
           function transfer_no()
           {
               transfer_money =0;
               document.getElementById("page16").style = "display : none";
               document.getElementById("page3").style = "display : block";
           }
           function tr_home()
           {
            document.getElementById("page17").style = "display : none";
            document.getElementById("page3").style = "display : block";
           }
           function transfer()
           {
            document.getElementById("page3").style = "display : none";
            document.getElementById("page15").style = "display : block";
           }
           function tr_trans()
           {
            document.getElementById("page17").style = "display : none";
            document.getElementById("page15").style = "display : block";
           }
           function tr_tr()
           {
               document.getElementById("page17").style = "display : none";
               document.getElementById("page1").style = "display : block";
           }