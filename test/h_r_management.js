const HR_management = artifacts.require("HR_management");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

/*
Addresses Used:
0 - HR - 0x1F7B7fFb2985b21c45eD3536f1bF46bb392A0Ec9 - 0xffd782f1E2E49c657825244DAD83e3eb47b9bD93
1 - TechInterviewer1 - 0x3915d8068db73d34543AF45652D887886E557aF1 - 0xee2492E2Efc2BF4ec2E712AAE3005405D6B5B06E
2 - TechInterviewer2 - 0xe985Fd23cCf2e25b4B191eF7EDC408D495CfcE4E - 0x9ca4dA9309265721CeAa420c3D6aeC3084f3A4D8

3- HR - 0xA97787f7Cb686ACBbbBF5dC974031D628F95ffa8 - 0xC8084A14EE479cc99f80a9cD25263eec6786D811
4 - TechInterviewer1 - 0xa7ec51e46e231cC45d316d0174A5089A8261874A - 0xeCF9122282d570B8c6e5cc29B4C4bF4D05C01053
5 - TechInterviewer2 - 0xF54e56260336eF355B5ae200f28641171D016aD1 - 0xECCCCb8E232E4fcbF8C03fd9d4B17465b4649b88
*/

contract('HR_management', async accounts => {

  //--------------------------------- Functional Testing ------------------------------------------------------//

  //Functional testing of the create Participant function
  it("should create One Participant - Test 1", async () => {
    let instance = await HR_management.deployed();
    let participantId = await instance.addParticipant("A","passA","0xffd782f1E2E49c657825244DAD83e3eb47b9bD93","HR");
    let participant = await instance.participants(0);
    assert.equal(participant[0], "A");
    assert.equal(participant[2], "HR");
  });
  it("should create One Participant - Test 2", async () => {
    let instance = await HR_management.deployed();
    let participantId = await instance.addParticipant("B","passB","0xee2492E2Efc2BF4ec2E712AAE3005405D6B5B06E","TechInterviewer1");
    let participant = await instance.participants(1);
    assert.equal(participant[0], "B");
    assert.equal(participant[2], "TechInterviewer1");
  });
  it("should create One Participant - Test 3", async () => {
    let instance = await HR_management.deployed();
    let participantId = await instance.addParticipant("C","passC","0x9ca4dA9309265721CeAa420c3D6aeC3084f3A4D8","TechInterviewer2");
    let participant = await instance.participants(2);
    assert.equal(participant[0], "C");
    assert.equal(participant[2], "TechInterviewer2");
  });
  it("should create One Participant - Test 4", async () => {
    let instance = await HR_management.deployed();
    let participantId = await instance.addParticipant("D","passD","0xC8084A14EE479cc99f80a9cD25263eec6786D811","HR");
    let participant = await instance.participants(3);
    assert.equal(participant[0], "D");
    assert.equal(participant[2], "HR");
  });
  it("should create One Participant - Test 5", async () => {
    let instance = await HR_management.deployed();
    let participantId = await instance.addParticipant("E","passE","0xeCF9122282d570B8c6e5cc29B4C4bF4D05C01053","TechInterviewer1");
    let participant = await instance.participants(4);
    assert.equal(participant[0], "E");
    assert.equal(participant[2], "TechInterviewer1");
  });
  it("should create One Participant - Test 6", async () => {
    let instance = await HR_management.deployed();
    let participantId = await instance.addParticipant("F","passF","0xECCCCb8E232E4fcbF8C03fd9d4B17465b4649b88","TectInterviewer2");
    let participant = await instance.participants(5);
    assert.equal(participant[0], "F");
    assert.equal(participant[2], "TectInterviewer2");
  });

  //Functional testing of the get Participant details function
  it("should return One Participant details - Test 1", async () => {
    let instance = await HR_management.deployed();
    let participantDetails = await instance.getParticipant(0);
    assert.equal(participantDetails[0], "A");
  })
  it("should return One Participant details - Test 2", async () => {
    let instance = await HR_management.deployed();
    let participantDetails = await instance.getParticipant(1);
    assert.equal(participantDetails[0], "B");
  })
  it("should return One Participant details - Test 3", async () => {
    let instance = await HR_management.deployed();
    let participantDetails = await instance.getParticipant(2);
    assert.equal(participantDetails[0], "C");
  })
  it("should return One Participant details - Test 4", async () => {
    let instance = await HR_management.deployed();
    let participantDetails = await instance.getParticipant(3);
    assert.equal(participantDetails[0], "D");
  })
  it("should return One Participant details - Test 5", async () => {
    let instance = await HR_management.deployed();
    let participantDetails = await instance.getParticipant(4);
    assert.equal(participantDetails[0], "E");
  })
  it("should return One Participant details - Test 6", async () => {
    let instance = await HR_management.deployed();
    let participantDetails = await instance.getParticipant(5);
    assert.equal(participantDetails[0], "F");
  })

  //Functional testing of the create Employee function
  it("should create One Employee - Test 1", async () => {
    let instance = await HR_management.deployed();
    let employeeId = await instance.addEmployee("Emp 1","Employee 1","Developer",0,80000);
    let employee = await instance.employees(0);
    assert.equal(employee[0], "Emp 1");
    assert.equal(employee[3], "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93");
    assert.equal(employee[5], 0);
  });
  it("should create One Employee - Test 2", async () => {
    let instance = await HR_management.deployed();
    let employeeId = await instance.addEmployee("Emp 2","Employee 2","Tester",0,60000);
    let employee = await instance.employees(1);
    assert.equal(employee[0], "Emp 2");
    assert.equal(employee[3], "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93");
    assert.equal(employee[5], 0);
  });
  it("should create One Employee - Test 3", async () => {
    let instance = await HR_management.deployed();
    let employeeId = await instance.addEmployee("Emp 3","Employee 3","Consultant",0,75000);
    let employee = await instance.employees(2);
    assert.equal(employee[0], "Emp 3");
    assert.equal(employee[3], "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93");
    assert.equal(employee[5], 0);
  });
  it("should create One Employee - Test 4", async () => {
    let instance = await HR_management.deployed();
    let employeeId = await instance.addEmployee("Emp 4","Employee 4","Manager",3,120000);
    let employee = await instance.employees(3);
    assert.equal(employee[0], "Emp 4");
    assert.equal(employee[3], "0xC8084A14EE479cc99f80a9cD25263eec6786D811");
    assert.equal(employee[5], 0);
  });
  it("should create One Employee - Test 5", async () => {
    let instance = await HR_management.deployed();
    let employeeId = await instance.addEmployee("Emp 5","Employee 5","SAP Consultant",3,96000);
    let employee = await instance.employees(4);
    assert.equal(employee[0], "Emp 5");
    assert.equal(employee[3], "0xC8084A14EE479cc99f80a9cD25263eec6786D811");
    assert.equal(employee[5], 0);
  });
  it("should create One Employee - Test 6", async () => {
    let instance = await HR_management.deployed();
    let employeeId = await instance.addEmployee("Emp 6","Employee 6","Senior Manager",3,150000);
    let employee = await instance.employees(5);
    assert.equal(employee[0], "Emp 6");
    assert.equal(employee[3], "0xC8084A14EE479cc99f80a9cD25263eec6786D811");
    assert.equal(employee[5], 0);
  });

  //Functional testing of the get Employee function
  it("should return One Employee details - Test 1", async () => {
    let instance = await HR_management.deployed();
    let employeeDetails = await instance.getEmployee(0);
    assert.equal(employeeDetails[0], "Emp 1");
  })
  it("should return One Employee details - Test 2", async () => {
    let instance = await HR_management.deployed();
    let employeeDetails = await instance.getEmployee(1);
    assert.equal(employeeDetails[0], "Emp 2");
  })
  it("should return One Employee details - Test 3", async () => {
    let instance = await HR_management.deployed();
    let employeeDetails = await instance.getEmployee(2);
    assert.equal(employeeDetails[0], "Emp 3");
  })
  it("should return One Employee details - Test 4", async () => {
    let instance = await HR_management.deployed();
    let employeeDetails = await instance.getEmployee(3);
    assert.equal(employeeDetails[0], "Emp 4");
  })
  it("should return One Employee details - Test 5", async () => {
    let instance = await HR_management.deployed();
    let employeeDetails = await instance.getEmployee(4);
    assert.equal(employeeDetails[0], "Emp 5");
  })
  it("should return One Employee details - Test 6", async () => {
    let instance = await HR_management.deployed();
    let employeeDetails = await instance.getEmployee(5);
    assert.equal(employeeDetails[0], "Emp 6");
  })

  //------------------------------------- Security Testing -----------------------------------------------//

  // Security testing of the update score function by Technical interviewer 1 and 2
  //Should not be happening !!

  it("TechInterviewer-1 should update One Employee's Score - Test 1", async () => {
    let instance = await HR_management.deployed();
    await instance.updateEmpScore(1, 0, 5);
    let employeeData = await instance.getEmployee(0);
    assert.equal(employeeData[5], 5);
  });
  it("TechInterviewer-2 should update One Employee's Score - Test 2", async () => {
    let instance = await HR_management.deployed();
    await instance.updateEmpScore(2, 0, 7);
    let employeeData = await instance.getEmployee(0);
    assert.equal(employeeData[5], 12);
  });
  it("TechInterviewer-1 should update One Employee's Score - Test 3", async () => {
    let instance = await HR_management.deployed();
    await instance.updateEmpScore(1, 1, 10);
    let employeeData = await instance.getEmployee(1);
    assert.equal(employeeData[5], 10);
  });
  it("TechInterviewer-2 should update One Employee's Score - Test 4", async () => {
    let instance = await HR_management.deployed();
    await instance.updateEmpScore(2, 1, 8);
    let employeeData = await instance.getEmployee(1);
    assert.equal(employeeData[5], 18);
  });
  it("TechInterviewer-1 should update One Employee's Score - Test 5", async () => {
    let instance = await HR_management.deployed();
    await instance.updateEmpScore(1, 2, 3);
    let employeeData = await instance.getEmployee(2);
    assert.equal(employeeData[5], 3);
  });
  it("TechInterviewer-2 should update One Employee's Score - Test 6", async () => {
    let instance = await HR_management.deployed();
    await instance.updateEmpScore(2, 2, 5);
    let employeeData = await instance.getEmployee(2);
    assert.equal(employeeData[5], 8);
  });

  //------------------------------------- Security Testing -----------------------------------------------//

  //Functional testing of the transfer Employee function
  it("should transfer One Employee - Test 1", async () => {
    let instance = await HR_management.deployed();
    let instance2 = await instance.newOwner(0,1,0,{from: "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93"});
  });
  it("should transfer One Employee - Test 2", async () => {
    let instance = await HR_management.deployed();
    let instance2 = await instance.newOwner(1,2,0,{from: "0xee2492E2Efc2BF4ec2E712AAE3005405D6B5B06E"});
  });
  it("should transfer One Employee - Test 3", async () => {
    let instance = await HR_management.deployed();
    let instance2 = await instance.newOwner(2,0,0,{from: "0x9ca4dA9309265721CeAa420c3D6aeC3084f3A4D8"});
  });

  it("should transfer One Employee - Test 4", async () => {
    let instance = await HR_management.deployed();
    let instance2 = await instance.newOwner(3,4,3,{from: "0xC8084A14EE479cc99f80a9cD25263eec6786D811"});
  });
  it("should transfer One Employee - Test 5", async () => {
    let instance = await HR_management.deployed();
    let instance2 = await instance.newOwner(4,5,3,{from: "0xeCF9122282d570B8c6e5cc29B4C4bF4D05C01053"});
  });

  //---------------------------------END -- Functional Testing --END-------------------------------------------//


  //-----------------------------------------------------------------------------------------------------------//


  //------------------------------START -- Performance Testing -- START----------------------------------------//
  
  /**
   * PERFORMANCE TESTING FOR CREATION OF EMPLOYEES (BY HR)
   */

  //Creating 20 Employees the get Employee function
  it("Performance testing for creating 20 Employees", async () => {
    let instance = await HR_management.deployed();
    for(var i = 6; i < 26; i++) {
      let employeeId = await instance.addEmployee("EMP"+i,"Employee "+i,"Developer",0,80000);
      let employee = await instance.employees(i);
    }
  });
  //Creating 40 Employees the get Employee function
  it("Performance testing for creating 40 Employees", async () => {
    let instance = await HR_management.deployed();
    for(var i = 26; i < 66; i++) {
      let employeeId = await instance.addEmployee("EMP"+i,"Employee "+i,"Tester",0,80000);
      let employee = await instance.employees(i);
    }
  });

  //Creating 60 Employees the get Employee function
  it("Performance testing for creating 60 Employees", async () => {
    let instance = await HR_management.deployed();
    for(var i = 66; i < 126; i++) {
      let employeeId = await instance.addEmployee("EMP"+i,"Employee "+i,"Manager",0,80000);
      let employee = await instance.employees(i);
    }
  });

  //Creating 80 Employees the get Employee function
  it("Performance testing for creating 80 Employees", async () => {
    let instance = await HR_management.deployed();
    for(var i = 126; i < 206; i++) {
      let employeeId = await instance.addEmployee("EMP"+i,"Employee "+i,"Consultant",0,80000);
      let employee = await instance.employees(i);
    }
  });

  //Creating 100 Employees the get Employee function
  it("Performance testing for creating 100 Employees", async () => {
    let instance = await HR_management.deployed();
    for(var i = 206; i < 306; i++) {
      let employeeId = await instance.addEmployee("EMP"+i,"Employee "+i,"Consultant",0,80000);
      let employee = await instance.employees(i);
    }
  });


  /**
   * PERFORMANCE TESTING FOR TRANSFERING THE EMPLOYEES
   */

  /** TRANSFER : HR->TechInterviewer1 */

  //Transfering 20 employees from HR-> TechInterviewer1
  it("should transfer 20 Employees - HR->TechInterviewer1", async () => {
    let instance = await HR_management.deployed();
    for(var i = 6; i < 26; i++) {
      let instance2 = await instance.newOwner(0,1,i,{from: "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93"});
    }
  });

  //Transfering 40 employees from HR-> TechInterviewer1
  it("should transfer 40 Employees - HR->TechInterviewer1", async () => {
    let instance = await HR_management.deployed();
    for(var i = 26; i < 66; i++) {
      let instance2 = await instance.newOwner(0,1,i,{from: "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93"});
    }
  });

  //Transfering 60 employees from HR-> TechInterviewer1
  it("should transfer 60 Employees - HR->TechInterviewer1", async () => {
    let instance = await HR_management.deployed();
    for(var i = 66; i < 126; i++) {
      let instance2 = await instance.newOwner(0,1,i,{from: "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93"});
    }
  });

  //Transfering 80 employees from HR-> TechInterviewer1
  it("should transfer 80 Employees - HR->TechInterviewer1", async () => {
    let instance = await HR_management.deployed();
    for(var i = 126; i < 206; i++) {
      let instance2 = await instance.newOwner(0,1,i,{from: "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93"});
    }
  });

  //Transfering 100 employees from HR-> TechInterviewer1
  it("should transfer 100 Employees - HR->TechInterviewer1", async () => {
    let instance = await HR_management.deployed();
    for(var i = 206; i < 306; i++) {
      let instance2 = await instance.newOwner(0,1,i,{from: "0xffd782f1E2E49c657825244DAD83e3eb47b9bD93"});
    }
  });

  /** Performance testing Score updation by TechInterviewer-1 */
  
  // Score updation of 20 Employees
  it("TechInterviewer-1 should update 20 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 6; i < 26; i++) {
      await instance.updateEmpScore(1, i, 5);
    }
  });
  // Score updation of 40 Employees
  it("TechInterviewer-1 should update 40 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 26; i < 66; i++) {
      await instance.updateEmpScore(1, i, 7);
    }
  });
  // Score updation of 60 Employees
  it("TechInterviewer-1 should update 60 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 66; i < 126; i++) {
      await instance.updateEmpScore(1, i, 8);
    }
  });
  // Score updation of 80 Employees
  it("TechInterviewer-1 should update 80 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 126; i < 206; i++) {
      await instance.updateEmpScore(1, i, 9);
    }
  });
  // Score updation of 100 Employees
  it("TechInterviewer-1 should update 100 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 206; i < 306; i++) {
      await instance.updateEmpScore(1, i, 10);
    }
  });

  /** Performance testing for Feedback updation by TechInterviewer-1 */
  
  // Feedback updation of 20 Employees
  it("TechInterviewer-1 should update 20 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 6; i < 26; i++) {
      await instance.updateFeedback(1, i, "Bad");
    }
  });
  // Feedback updation of 40 Employees
  it("TechInterviewer-1 should update 40 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 26; i < 66; i++) {
      await instance.updateFeedback(1, i, "Average");
    }
  });
  // Feedback updation of 60 Employees
  it("TechInterviewer-1 should update 60 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 66; i < 126; i++) {
      await instance.updateFeedback(1, i, "Good");
    }
  });
  // Feedback updation of 80 Employees
  it("TechInterviewer-1 should update 80 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 126; i < 206; i++) {
      await instance.updateFeedback(1, i, "Great");
    }
  });
  // Feedback updation of 100 Employees
  it("TechInterviewer-1 should update 100 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 206; i < 306; i++) {
      await instance.updateFeedback(1, i, "Excellent");
    }
  });

  /** TRANSFER : TechInterviewer1->TechInterviewer2 */

  //Transfering 20 employees from TechInterviewer1->TechInterviewer2
  it("should transfer 20 Employees - TechInterviewer1->TechInterviewer2", async () => {
    let instance = await HR_management.deployed();
    for(var i = 6; i < 26; i++) {
      let instance2 = await instance.newOwner(1,2,i,{from: "0xee2492E2Efc2BF4ec2E712AAE3005405D6B5B06E"});
    }
  });

  //Transfering 40 employees from TechInterviewer1->TechInterviewer2
  it("should transfer 40 Employees - TechInterviewer1->TechInterviewer2", async () => {
    let instance = await HR_management.deployed();
    for(var i = 26; i < 66; i++) {
      let instance2 = await instance.newOwner(1,2,i,{from: "0xee2492E2Efc2BF4ec2E712AAE3005405D6B5B06E"});
    }
  });

  //Transfering 60 employees from TechInterviewer1->TechInterviewer2
  it("should transfer 60 Employees - TechInterviewer1->TechInterviewer2", async () => {
    let instance = await HR_management.deployed();
    for(var i = 66; i < 126; i++) {
      let instance2 = await instance.newOwner(1,2,i,{from: "0xee2492E2Efc2BF4ec2E712AAE3005405D6B5B06E"});
    }
  });

  //Transfering 80 employees from TechInterviewer1->TechInterviewer2
  it("should transfer 80 Employees - TechInterviewer1->TechInterviewer2", async () => {
    let instance = await HR_management.deployed();
    for(var i = 126; i < 206; i++) {
      let instance2 = await instance.newOwner(1,2,i,{from: "0xee2492E2Efc2BF4ec2E712AAE3005405D6B5B06E"});
    }
  });

  //Transfering 100 employees from TechInterviewer1->TechInterviewer2
  it("should transfer 100 Employees - TechInterviewer1->TechInterviewer2", async () => {
    let instance = await HR_management.deployed();
    for(var i = 206; i < 306; i++) {
      let instance2 = await instance.newOwner(1,2,i,{from: "0xee2492E2Efc2BF4ec2E712AAE3005405D6B5B06E"});
    }
  });


  /** Performance testing Score updation by TechInterviewer-2 */
  
  // Score updation of 20 Employees
  it("TechInterviewer-2 should update 20 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 6; i < 26; i++) {
      await instance.updateEmpScore(2, i, 5);
    }
  });
  // Score updation of 40 Employees
  it("TechInterviewer-2 should update 40 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 26; i < 66; i++) {
      await instance.updateEmpScore(2, i, 6);
    }
  });
  // Score updation of 60 Employees
  it("TechInterviewer-2 should update 60 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 66; i < 126; i++) {
      await instance.updateEmpScore(2, i, 7);
    }
  });
  // Score updation of 80 Employees
  it("TechInterviewer-2 should update 80 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 126; i < 206; i++) {
      await instance.updateEmpScore(2, i, 8);
    }
  });
  // Score updation of 100 Employees
  it("TechInterviewer-2 should update 100 Employees Score", async () => {
    let instance = await HR_management.deployed();
    for(var i = 206; i < 306; i++) {
      await instance.updateEmpScore(2, i, 10);
    }
  });

  /** Performance testing Feedback updation by TechInterviewer-2 */
  
  // Feedback updation of 20 Employees
  it("TechInterviewer-2 should update 20 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 6; i < 26; i++) {
      await instance.updateFeedback(2, i, "Average");
    }
  });
  // Feedback updation of 40 Employees
  it("TechInterviewer-2 should update 40 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 26; i < 66; i++) {
      await instance.updateFeedback(2, i, "Good");
    }
  });
  // Feedback updation of 60 Employees
  it("TechInterviewer-2 should update 60 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 66; i < 126; i++) {
      await instance.updateFeedback(2, i, "Great");
    }
  });
  // Feedback updation of 80 Employees
  it("TechInterviewer-2 should update 80 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 126; i < 206; i++) {
      await instance.updateFeedback(2, i, "Excellent");
    }
  });
  // Feedback updation of 100 Employees
  it("TechInterviewer-2 should update 100 Employees Feedback", async () => {
    let instance = await HR_management.deployed();
    for(var i = 206; i < 306; i++) {
      await instance.updateFeedback(2, i, "Outstanding");
    }
  });

  /** TRANSFER : TechInterviewer2->HR */

  //Transfering 20 employees from TechInterviewer2->HR
  it("should transfer 20 Employees - TechInterviewer2->HR", async () => {
    let instance = await HR_management.deployed();
    for(var i = 6; i < 26; i++) {
      let instance2 = await instance.newOwner(2,0,i,{from: "0x9ca4dA9309265721CeAa420c3D6aeC3084f3A4D8"});
    }
  });

  //Transfering 40 employees from TechInterviewer2->HR
  it("should transfer 40 Employees - TechInterviewer2->HR", async () => {
    let instance = await HR_management.deployed();
    for(var i = 26; i < 66; i++) {
      let instance2 = await instance.newOwner(2,0,i,{from: "0x9ca4dA9309265721CeAa420c3D6aeC3084f3A4D8"});
    }
  });

  //Transfering 60 employees from TechInterviewer2->HR
  it("should transfer 60 Employees - TechInterviewer2->HR", async () => {
    let instance = await HR_management.deployed();
    for(var i = 66; i < 126; i++) {
      let instance2 = await instance.newOwner(2,0,i,{from: "0x9ca4dA9309265721CeAa420c3D6aeC3084f3A4D8"});
    }
  });

  //Transfering 80 employees from TechInterviewer2->HR
  it("should transfer 80 Employees - TechInterviewer2->HR", async () => {
    let instance = await HR_management.deployed();
    for(var i = 126; i < 206; i++) {
      let instance2 = await instance.newOwner(2,0,i,{from: "0x9ca4dA9309265721CeAa420c3D6aeC3084f3A4D8"});
    }
  });

  //Transfering 100 employees from TechInterviewer2->HR
  it("should transfer 100 Employees - TechInterviewer2->HR", async () => {
    let instance = await HR_management.deployed();
    for(var i = 206; i < 306; i++) {
      let instance2 = await instance.newOwner(2,0,i,{from: "0x9ca4dA9309265721CeAa420c3D6aeC3084f3A4D8"});
    }
  });

  //--------------------------------END -- Performance Testing -- END------------------------------------------//
  
  //-----------------------------------------------------------------------------------------------------------//
 
});