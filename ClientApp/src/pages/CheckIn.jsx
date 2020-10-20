import React from 'react';
import { Header } from '../components/Header';

export function CheckIn() {
  return (
  <>
    <Header/>
    <h1>WEEKLY CHECK-IN</h1>
    <form>
      <div>
       <h2>Question</h2>
       <input type = "radio"/>
       <label>NO</label>  
       <input type = "radio"/>
      <label>YES</label>
      </div>
      <div>
       <h2>Question</h2>
       <input type = "radio"/>
       <label>NO</label>  
       <input type = "radio"/>    
      <label>YES</label>
      </div>
      <div>
       <h2>Question</h2>
       <input type = "radio"/>
       <label>NO</label> 
       <input type = "radio"/>    
      <label>YES</label>
      </div>
      <div>
       <h2>Question</h2>
       <input type = "radio"/>
       <label>NO</label>   
       <input type = "radio"/>    
      <label>YES</label>
      </div>
    </form>
  </>  
  );
}
