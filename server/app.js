const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const models = require('./models')
const PORT = 8080

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register',(req,res) => {
  let firstName = req.body.firstName
  let lastName = req.body.lastname
  let email = req.body.email
  let password = req.body.password

  bcrypt.has(password,6,function(err,hash) {
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hash
    }

    console.log('bcrypt user created')

    models.User.create(user).then(user => {
      console.log(user)
    })
  })
})

app.post('/api/properties',(req,res) => {
  let rentalid = req.body.rentalid
  let address = req.body.address
  let city = req.body.city
  let state = req.body.state
  let zipcode = req.body.zipcode
  let hcad = req.body.hcad
  let insured = req.body.insured
  let insuredamount = req.body.insuredamount
  let tenantid = req.body.tenantid
  let rent = req.body.rent

  let rental = {
    rentalid: rentalid,
    address: address,
    city: city,
    state: state,
    zipcode: zipcode,
    hcad: hcad,
    insured: insured,
    insuredamount: insuredamount,
    tenantid: tenantid,
    rent: rent
  }

  models.Property.create(rental).then(rental => {
    console.log('Property model created.')
    console.log(rental)
  })

  res.json({message: 'Property added successfully.'})
})

app.post('/api/tenants',(req,res) => {
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let phoneno = req.body.phoneno
  let propertyid = req.body.propertyid
  console.log("propertyid: " + propertyid);

  let tenant = {
    firstname: firstname,
    lastname: lastname,
    phoneno: phoneno,
    propertyid: propertyid
  }

  models.Tenant.create(tenant).then(tenant => {
    console.log('Tenant model created.')
    console.log(tenant)
  })

  res.json({message: 'Tenant added successfully.'})
})

app.post('/api/applications',(req,res) => {
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let dl = req.body.dl
  let dlState = req.body.dlState
  let ssn = req.body.ssn
  let coFirstName = req.body.coFirstName
  let coLastName = req.body.coLastName
  let coDl = req.body.coDl
  let coDlState = req.body.coDlState
  let coSsn = req.body.coSsn
  let otherResidents = req.body.otherResidents
  let currentIncome = req.body.currentIncome
  let currentHouseholdIncome = req.body.currentHouseholdIncome
  let currentPayment = req.body.currentPayment
  let employer = req.body.employer
  let supervisor = req.body.supervisor
  let supervisorPhoneNo = req.body.supervisorPhoneNo
  let verifyMethod = req.body.verifyMethod
  console.log(firstName);

  let application = {
    firstname: firstName,
    lastname: lastName,
    dl: dl,
    dlstate: dlState,
    ssn: ssn,
    cofirstname: coFirstName,
    colastname: coLastName,
    codl: coDl,
    codlstate: coDlState,
    cossn: coSsn,
    otherresidents: otherResidents,
    currentincome: currentIncome,
    currenthouseholdincome: currentHouseholdIncome,
    currentpayment: currentPayment,
    employer: employer,
    supervisor: supervisor,
    supervisorphoneno: supervisorPhoneNo,
    verifymethod: verifyMethod
  }

  models.Application.create(application).then(application => {
    console.log('Appication model created.')
    console.log(application)
  })

  res.json({message: 'Application added successfully.'})
})

app.post('/api/repairs',(req,res) => {
  let propertyid = req.body.propertyid
  let daterepaired = req.body.daterepaired
  let title = req.body.title
  let description = req.body.description

  let repair = {
    propertyid: propertyid,
    daterepaired: daterepaired,
    title: title,
    description: description
  }

  models.Repair.create(repair).then(repair => {
    console.log('Repair model created.')
    console.log(repair)
  })

  res.json({message: 'Repair added successfully.'})
})

app.get('/api/properties',(req,res) => {
  models.Property.findAll({
  }).then(propertyList => {
    console.log(propertyList);
    res.json({propertyList: propertyList})
  })
})

app.get('/api/applications',(req,res) => {
  models.Application.findAll({
  }).then(applicationList => {
    console.log(applicationList);
    res.json({applicationList: applicationList})
  })
})

app.get('/api/repairs',(req,res) => {
  models.Repair.findAll({
  }).then(repairList => {
    console.log(repairList);
    res.json({repairList: repairList})
  })
})

app.get('/api/tenants',(req,res) => {
  models.Tenant.findAll({
  }).then(tenantList => {
    console.log(tenantList);
    res.json({tenantList: tenantList})
  })
})

app.listen(PORT,() => {
  console.log('Server is running...')
})
