<aura:application>
    <link href="/resource/bootstrap" rel="stylesheet" />
    <nav class="navbar navbar-default navbar-static-top bg-primary" data-bs-theme="dark" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Lightning Contacts</a>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-4 mt-3">
                <c:ContactList />
            </div>
            <div class="col-md-8 mt-3">
                <c:ContactDetails />
            </div>
        </div>
    </div>
</aura:application>