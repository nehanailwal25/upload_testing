pragma solidity >=0.5.16 <0.9.0;

//Smart contract for whole HR Hiring process in the IT company
contract HR_management {
    
    uint32 public employee_id = 0;                          // Employee ID
    uint32 public participant_id = 0;                       // Participant ID as Technical people
    uint32 public owner_id = 0;                             // Ownership ID

    struct employee {
        string employeeNumber;
        string employeeName;
        string employeeDesignation;
        address employeeOwner;
        uint32 currentSalary;
        uint32 employeeScore;
        uint32 joiningTimeStamp;
        string emp_feedback_tech1;
        string emp_feedback_tech2;
    }

    mapping(uint32 => employee) public employees;
    struct participant {
        string userName;
        string password;
        string participantType;                             //Technical Interviewer1, Technical Interviewer2, HR
        address participantAddress;
    }
    
    mapping(uint32 => participant) public participants;
    struct ownership {
        uint32 employeeId;
        uint32 ownerId;
        uint32 trxTimeStamp;
        address employeeOwner;
    }
    
    mapping(uint32 => ownership) public ownerships;             // ownerships by ownership ID (owner_id)
    mapping(uint32 => uint32[]) public employeeTrack;           // ownerships by Employee ID (employee_id) / Movement track for an Employee

    event TransferOwnership(uint32 employeeId);

    //Function to add an Participant in the Employee Hiring management System.
    function addParticipant(string memory _name, string memory _pass, address _pAdd, string memory _pType) public returns (uint32) {
        uint32 userId = participant_id++;
        participants[userId].userName = _name;
        participants[userId].password = _pass;
        participants[userId].participantAddress = _pAdd;
        participants[userId].participantType = _pType;
        return userId;
    }
    
    //Function to get the Participant's details from the Employee Hiring management System.
    function getParticipant(uint32 _participant_id) public view returns (string memory,address,string memory) {
        return (participants[_participant_id].userName,
        participants[_participant_id].participantAddress,
        participants[_participant_id].participantType);
    }

    //Function to add a New Employee in the System
    //This process can only be done by the HR
    function addEmployee(string memory _employeeNumber,
    string memory _employeeName,
    string memory _employeeDesignation,
    uint32 _ownerId,
    uint32 _currentSalary) public returns (uint32) {
        if(keccak256(abi.encodePacked(participants[_ownerId].participantType)) == keccak256("HR")) {
        uint32 employeeId = employee_id++;
        employees[employeeId].employeeNumber = _employeeNumber;
        employees[employeeId].employeeName = _employeeName;
        employees[employeeId].employeeDesignation = _employeeDesignation;
        employees[employeeId].employeeOwner = participants[_ownerId].participantAddress;
        employees[employeeId].currentSalary = _currentSalary;
        employees[employeeId].employeeScore = 0;
        employees[employeeId].joiningTimeStamp = uint32(block.timestamp);
        employees[employeeId].emp_feedback_tech1 = '';
        employees[employeeId].emp_feedback_tech2 = '';
        return employeeId;
        }
        return 0;
    }

    //Function to update Employee Score in the System
    //This process updates the final score in the same variable and adds the score the both the participants
    //Both of the Technical Interviewers can give score out of 10 each
    function updateEmpScore(uint32 _ownerId, uint32 _employeeId, uint32 _employeeScore) public{
        if(keccak256(abi.encodePacked(participants[_ownerId].participantType)) == keccak256("TechInterviewer1") || 
        keccak256(abi.encodePacked(participants[_ownerId].participantType)) == keccak256("TechInterviewer2")) {
            if(keccak256(abi.encodePacked(employees[_employeeId].employeeOwner)) == keccak256(abi.encodePacked(_ownerId))){
                employees[_employeeId].employeeScore += _employeeScore;
            }
        }
    }

    //Function to update the Employee Feedback on the basis of Interview in the System
    //This process can only be done by the Technical Interviewers (TechInterviewer1, TechInterviewer2)
    function updateFeedback(uint32 _ownerId, uint32 _employeeId, string memory _emp_feedback) public{
        if(keccak256(abi.encodePacked(participants[_ownerId].participantType)) == keccak256("TechInterviewer1")) {
            if(keccak256(abi.encodePacked(employees[_employeeId].employeeOwner)) == keccak256(abi.encodePacked(_ownerId)))
            {
                employees[_employeeId].emp_feedback_tech1 = _emp_feedback;
            }
        }
        else if(keccak256(abi.encodePacked(participants[_ownerId].participantType)) == keccak256("TechInterviewer2")){
            if(keccak256(abi.encodePacked(employees[_employeeId].employeeOwner)) == keccak256(abi.encodePacked(_ownerId))){
                employees[_employeeId].emp_feedback_tech2 = _emp_feedback;
            }
        }
    }

    modifier onlyOwner(uint32 _employeeId) {
        require(msg.sender == employees[_employeeId].employeeOwner,"");
        _;
    }

    //Function to get the Employee's Data from the System
    function getEmployee(uint32 _employeeId) public view returns (string memory,string memory,string memory,address,uint32,uint32,uint32,string memory,string memory){
    employee memory e = employees[_employeeId];
        return (e.employeeNumber,
        e.employeeName,
        e.employeeDesignation,
        e.employeeOwner,
        e.currentSalary,
        e.employeeScore,
        e.joiningTimeStamp,
        e.emp_feedback_tech1,
        e.emp_feedback_tech2);
    }
    
    //Function to transfer Employee along the whole process
    /**
    HR can transfer the Employee to TechInterviewer1
    TechInterviewer1 can transfer the Employee to TechInterviewer2
    TechInterviewer2 can transfer the Employee back to HR
    */
    function newOwner(uint32 _user1Id,uint32 _user2Id, uint32 _empId) onlyOwner(_empId) public returns (bool) {
        participant memory p1 = participants[_user1Id];
        participant memory p2 = participants[_user2Id];
        uint32 ownership_id = owner_id++;
        
        if(keccak256(abi.encodePacked(p1.participantType)) == keccak256("HR")&& keccak256(abi.encodePacked(p2.participantType))==keccak256("TechInterviewer1")){
            ownerships[ownership_id].employeeId = _empId;
            ownerships[ownership_id].employeeOwner = p2.participantAddress;
            ownerships[ownership_id].ownerId = _user2Id;
            ownerships[ownership_id].trxTimeStamp = uint32(block.timestamp);
            employees[_empId].employeeOwner = p2.participantAddress;
            employeeTrack[_empId].push(ownership_id);
            emit TransferOwnership(_empId);
            return (true);
        }
        
        else if(keccak256(abi.encodePacked(p1.participantType)) == keccak256("TechInterviewer1") && keccak256(abi.encodePacked(p2.participantType))==keccak256("TechInterviewer2")){
            ownerships[ownership_id].employeeId = _empId;
            ownerships[ownership_id].employeeOwner = p2.participantAddress;
            ownerships[ownership_id].ownerId = _user2Id;
            ownerships[ownership_id].trxTimeStamp = uint32(block.timestamp);
            employees[_empId].employeeOwner = p2.participantAddress;
            employeeTrack[_empId].push(ownership_id);
            emit TransferOwnership(_empId);
            return (true);
        }

        else if(keccak256(abi.encodePacked(p1.participantType)) == keccak256("TechInterviewer2") && keccak256(abi.encodePacked(p2.participantType))==keccak256("HR")){
            ownerships[ownership_id].employeeId = _empId;
            ownerships[ownership_id].employeeOwner = p2.participantAddress;
            ownerships[ownership_id].ownerId = _user2Id;
            ownerships[ownership_id].trxTimeStamp = uint32(block.timestamp);
            employees[_empId].employeeOwner = p2.participantAddress;
            employeeTrack[_empId].push(ownership_id);
            emit TransferOwnership(_empId);
            return (true);
        }
        return (false);
    }
    
    // To Get track of the Employee (i.e where it is in the Blockchain flow currently)
    function getProvenance(uint32 _empId) external view returns (uint32[] memory) {
        return employeeTrack[_empId];
    }

    //Function to get the Owner details of any Employee
    function getOwnership(uint32 _regId) public view returns (uint32,uint32,address,uint32) {
        
        ownership memory r = ownerships[_regId];
        return (r.employeeId,r.ownerId,r.employeeOwner,r.trxTimeStamp);
    }
    
    //Function to Authenticate the Participant with all details
    function authenticateParticipant(uint32 _uid,
    string memory _uname,
    string memory _pass,
    string memory _utype) public view returns (bool){
        if(keccak256(abi.encodePacked(participants[_uid].participantType)) == keccak256(abi.encodePacked(_utype))) {
            if(keccak256(abi.encodePacked(participants[_uid].userName)) == keccak256(abi.encodePacked(_uname))) {
                if(keccak256(abi.encodePacked(participants[_uid].password)) == keccak256(abi.encodePacked(_pass))) {
                    return (true);
                }
            }
        }
        return (false);
    }

}