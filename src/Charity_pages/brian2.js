render() {
   return (
      <div>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />

		{this.BasicTable()}
      </div>
    );
  }
}