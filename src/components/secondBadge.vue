<template>
    <div class="card second-card">
            <div class="second-picture-container text default-border">

            </div>

            <div class="data">
                <div class="name">
                    <p>Nome Cognome</p>
                    <p>Pinco Pallo</p>
                </div>
                <div class="address">
                    <p>Sede</p>
                    <p>Via piana</p>
                </div>
                <div class="role">
                    <p>Ruolo</p>
                    <p>Junior hero</p>
                </div>
                <div class="role-picture">

                </div>
            </div>
    </div>
</template>


<style lang="scss">
     .second-card {
        width: 350px;
        height: 500px;
        overflow: hidden;

        .second-picture-container {
            width: 330px ;
            height: 150px;
            align-items: center;
            border-radius: 20px;
            margin:  30px;
        }

        .data {
            width: 100%;
            height: 58%;
            background-color: lightgrey;
            padding: 0 30px;
            color: #fff;
            position: relative;
        }

        .name {
            margin-top: 30px;
        }

        .address {
            margin-top: 20px;
            margin-bottom: 50px;
        }

        .role-picture {
            width: 100px;
            height: 100px;
            background-color: #ECECED;
            border-radius: 50%;
            position: absolute;
            right: 30px;
            bottom: 30px;
        }

        .default-border {
            border: 1px solid #FEFEFE;
        }
        
    }

    .name p:last-child, 
    .address p:last-child, 
    .role p:last-child {
        font-weight: bold;
        font-size: 1.2rem;
    }
    .card p {
        margin: 0;
    }
</style>